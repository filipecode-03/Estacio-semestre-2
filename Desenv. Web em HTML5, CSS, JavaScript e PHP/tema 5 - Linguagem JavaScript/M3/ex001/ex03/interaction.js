const cores = ["red", "green", "blue"]
for (let i = 1; i < 10; i ++) {
    document.write("<tr>")
    for (let j = 1; j < 10; j ++) {
        let pos = Math.trunc(Math.random()*3)
        document.write(`<td style='backgraud-color:${cores[pos]}'>$nbsp;</td>`)
    }
    document.write("</tr>")
}