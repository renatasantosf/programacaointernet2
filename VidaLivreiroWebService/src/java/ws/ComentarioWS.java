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
import service.ComentarioService;





@Path("comentario")
public class ComentarioWS {
    
    @EJB
    private ComentarioService comentarioService;

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of PostagemWS
     */
    public ComentarioWS() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Comentario> getPostagens() {
        //return new ArrayList<>();
        return comentarioService.listar();
    }
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Comentario getComentario(@PathParam("id") int id) {
        return comentarioService.buscarPorId(id);
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
    
    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void alterarComentario(@PathParam("id") int id,
            Comentario comentario) {
        Comentario c = comentarioService.buscarPorId(id);
        c.setNome(comentario.getNome());
        c.setTexto(comentario.getTexto());
    }
    
    
    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Comentario removerComentario(@PathParam("id") int id) {
        Comentario c = comentarioService.buscarPorId(id);
        comentarioService.excluir(c);
        return c;

    }
}

