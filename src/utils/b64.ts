export function btoa(b: any){
    return Buffer.from(b).toString("base64")
}

export function atob(b: any){
    return Buffer.from(b, "base64").toString()
}