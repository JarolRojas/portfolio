export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Si la request es para un archivo .vcf
    if (url.pathname.endsWith('.vcf')) {
      const response = await env.ASSETS.fetch(request);
      const newResponse = new Response(response.body, response);
      // Usar text/x-vcard que tiene mejor soporte en Android
      newResponse.headers.set('Content-Type', 'text/x-vcard');
      // Sin Content-Disposition para que Android lo abra directamente
      newResponse.headers.delete('Content-Disposition');
      return newResponse;
    }

    // Para cualquier otra request, servir los assets normalmente
    return env.ASSETS.fetch(request);
  },
};
