
package ws;

import java.io.IOException;
import java.util.List;
import javax.ejb.EJB;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.InternalServerErrorException;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import model.Postagem;
import service.PostagemService;

/**
 * REST Web Service
 *
 * @author 631510049
 */
@Path("postagem")
public class PostagemWS {
    
    @EJB
    private PostagemService postagemService;

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of PostagemWS
     */
    public PostagemWS() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Postagem> getPostagens() {
        return postagemService.listar();
    }
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Postagem getPostagem(@PathParam("id") int id) {
        return postagemService.buscarPorId(id);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void adicionarPostagem(Postagem p, @Context
    final HttpServletResponse response) throws Exception  {
        
        postagemService.inserir(p);
        response.setStatus(HttpServletResponse.SC_CREATED);
        try {
            response.flushBuffer();
        } catch(IOException e) {
            throw new InternalServerErrorException();
        }
    }
    
    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void alterarPostagem(@PathParam("id") int id,
            Postagem postagem) {
        Postagem p = postagemService.buscarPorId(id);
        p.setTitulo(postagem.getTitulo());
        p.setTexto(postagem.getTexto());
        p.setDtPostagem(postagem.getDtPostagem());
    }
    
    
    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Postagem removerPostagem(@PathParam("id") int id) {
        Postagem p = postagemService.buscarPorId(id);
        postagemService.excluir(p);
        return p;

    }
}
