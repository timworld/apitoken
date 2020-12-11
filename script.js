function randomString(length, chars) {
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result
}

function generateToken() {
    const token = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
    document.getElementById("token").value = token
}
    
(function () {
   // Generate a token a page launch
    generateToken()

    const tokenInput = document.getElementById("token")
    
    // Enable tooltips
    const tooltipSelector = document.querySelector('[data-bs-toggle="tooltip"]')
    const tooltip = new bootstrap.Tooltip(tooltipSelector)

    tokenInput.onclick = function () {
        if (document.getElementById("token").value.length > 0) {
            console.log("toto")

            this.select()
            document.execCommand('copy')

            tooltip.show()
            setTimeout(() => {
                tooltip.hide()
            }, 3000);
        }
    }
})()
