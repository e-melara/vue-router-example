const isAutheticatedGuard = async (to, from, next) => {
  return new Promise(resolve => {
    const random = Math.random() * 100;
    if (random > 50) {
      next();
      console.log(random);
    } else {
      console.log('Bloqueado ira al pokemon home');
      next({ name: 'pokemon-home' });
    }
  });
};

export default isAutheticatedGuard;
