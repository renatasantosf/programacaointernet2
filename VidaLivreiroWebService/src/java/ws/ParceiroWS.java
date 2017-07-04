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
import model.Parceiro;
import service.ParceiroService;






@Path("parceiro")
public class ParceiroWS {
    
    @EJB
    private ParceiroService parceiroService;

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of PostagemWS
     */
    public ParceiroWS() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Parceiro> getParceiros() {
        
        return parceiroService.listar();
    }
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Parceiro getParceiro(@PathParam("id") int id) {
        return parceiroService.buscarPorId(id);
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
    /*
    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void alterarParceiro(@PathParam("id") int id,
            Parceiro parceiro) {
        Parceiro p = parceiroService.buscarPorId(id);
        p.setNomePagina(parceiro.getNomePagina());
        p.setUrlPagina(parceiro.getUrlPagina());
        p.setNomeWebMaster(parceiro.getNomeWebMaster());
        p.setEmail(parceiro.getEmail());
    }
    
    
    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Parceiro removerParceiro(@PathParam("id") int id) {
        Parceiro p = parceiroService.buscarPorId(id);
        parceiroService.excluir(p);
        return p;

    }*/
}

