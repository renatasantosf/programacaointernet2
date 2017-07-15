package ws;
import java.util.List;
import javax.ejb.EJB;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.InternalServerErrorException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;
import model.Comentario;
import service.ComentarioService;


@Path("comentario")
public class ComentarioWS {
    
    @Context
    private UriInfo context;
    
    @EJB
    private ComentarioService comentarioService;

    
    public ComentarioWS() {
    }

      
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Comentario> getComentarios(@Context final HttpServletResponse response) {
        response.setHeader("Acess-Control-Allow-Origin", "*");
        return comentarioService.listar();
    }
    
   
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void adicionarComentario(Comentario c, @Context
    final HttpServletResponse response) {
        
        comentarioService.inserir(c);
        response.setStatus(HttpServletResponse.SC_CREATED);
       
            try {
                response.flushBuffer();
            } catch (java.io.IOException ex) {
                throw new InternalServerErrorException();
            }
       
    }
    
}

