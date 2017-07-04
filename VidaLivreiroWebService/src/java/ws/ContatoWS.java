package ws;

import java.util.List;
import javax.ejb.EJB;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.InternalServerErrorException;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;
import model.Contato;
import service.ContatoService;


@Path("contato")
public class ContatoWS {
    
    @EJB
    private ContatoService contatoService;

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of PostagemWS
     */
    public ContatoWS() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Contato> getContatos() {
        return contatoService.listar();
    }
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Contato getContato(@PathParam("id") int id) {
        return contatoService.buscarPorId(id);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void adicionarContato(Contato c, @Context
    final HttpServletResponse response) {
        
        contatoService.inserir(c);
        response.setStatus(HttpServletResponse.SC_CREATED);
       
            try {
                response.flushBuffer();
            } catch (java.io.IOException ex) {
                throw new InternalServerErrorException();
            }
       
    }
    /*
    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void alterarContato(@PathParam("id") int id,
            Contato contato) {
        Contato c = contatoService.buscarPorId(id);
        c.setNome(contato.getNome());
        c.setSobrenome(contato.getSobrenome());
        c.setEmail(contato.getEmail());
        c.setTelefone(contato.getTelefone());
        c.setMensagem(contato.getMensagem());
    }
    
    
    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Contato removerContato(@PathParam("id") int id) {
        Contato c = contatoService.buscarPorId(id);
        contatoService.excluir(c);
        return c;

    } */
}

