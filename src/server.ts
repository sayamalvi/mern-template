function welcome(name: string) {
    console.log('Hello');
    const user = {
        name: 'Sayam',
    };
    const fname = user.name;
    return name + fname;
}

welcome('sayam');
