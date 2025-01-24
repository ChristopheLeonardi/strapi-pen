// ./src/api/request/content-types/request/lifecycles.js

module.exports = {
  async afterCreate(event) {
    const { result } = event;
    console.log(result)
    try {
      await strapi.plugins['email'].services.email.send({
        to: 'contact@planetearthnow.org',
        from: 'contact@planetearthnow.org',
        subject: 'Nouvau message du formulaire de contact',
        text: `Un nouveau message à été posté sur le formulaire du site planetearthnow.org :
        \n Le : ${result.publishedAt}
        \n Name : ${result.nom}
        \n Email : ${result.email}
        \n Message : ${result.message}`,
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  },
};
