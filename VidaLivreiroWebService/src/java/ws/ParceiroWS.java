package ws;
import java.util.List;
import javax.ejb.EJB;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.InternalServerErrorException;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;
import model.Comentario;
import model.Parceiro;
import service.ComentarioService;
import service.ParceiroService;





@Path("parceiro")
public class ParceiroWS {
    
    @EJB
    private ParceiroService parceiroService;

    @Context
    private UriInfo context;

    
    public ParceiroWS() {
    }
    
    

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Parceiro> getParceiros(@Context final HttpServletResponse response) {
        response.setHeader("Acess-Control-Allow-Origin", "*");
        return parceiroService.listar();
    }
    
   
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void adicionarParceiro(Parceiro p, @Context
    final HttpServletResponse response) {
        
        parceiroService.inserir(p);
        response.setStatus(HttpServletResponse.SC_CREATED);
       
            try {
                response.flushBuffer();
            } catch (java.io.IOException ex) {
                throw new InternalServerErrorException();
            }
       
    }
    
   
}

