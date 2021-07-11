const Snackbar = ({ state, toggleSnackbar, timeout }:any) => {
    if (!timeout) timeout = 3000
    if (state) {
        setTimeout(() => {
            toggleSnackbar();
        }, timeout)
        return <div><h1>Snackbar</h1></div>
    }
    return null;
}

export default Snackbar;