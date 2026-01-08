export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Si la request es para un archivo .vcf
    if (url.pathname.endsWith('.vcf')) {
      const response = await env.ASSETS.fetch(request);
      const newResponse = new Response(response.body, response);
      newResponse.headers.set('Content-Type', 'text/vcard;charset=utf-8');
      newResponse.headers.set('Content-Disposition', 'inline; filename="jarol-rojas.vcf"');
      return newResponse;
    }

    // Para cualquier otra request, servir los assets normalmente
    return env.ASSETS.fetch(request);
  },
};
