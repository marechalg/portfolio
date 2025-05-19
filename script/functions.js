function addLog(typ, msg) {
    switch (typ) {
        case 'log':
            console.log(msg);
            break;
        case 'warn':
            console.warn(msg);
            break;
        case 'error':
            console.error(msg);
            break;
        case 'info':
            console.info(msg);
            break;
        case 'debug':
            console.debug(msg);
            break;
        default:
            console.log(msg);
            break;
    }
}

export { addLog };