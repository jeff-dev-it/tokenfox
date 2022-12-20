

export default function MaskText(text: string, template: string): string {
    let res = template
    for(const char of text){
        res = res.replace("#", char)
    }
    return res
}

export function RanText(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export function RandomNum(min: number, max: number){
    return Math.round(Math.random() * (max - min) + min)
}