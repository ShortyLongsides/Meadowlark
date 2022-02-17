const fortunes = [
    'Conquer your fears or they will conquer you',
    'Rivers need springs',
    'Do not fear what you do not know',
    'You will have a pleasant surprise',
    'You will die alone and poorly dressed'
    ];

    exports.getFortune = () => {
        const i = Math.floor(Math.random()*fortuneCookies.length);
        return fortuneCookies[i];
      };