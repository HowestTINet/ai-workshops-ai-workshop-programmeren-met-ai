export async function saveImageFromUrl(url: string, filePath: string) {  
    const response = await fetch(url);
  
    if ( ! response.ok) {  
      throw new Error(`Error fetching image: ${response.statusText}`);
    }    
    
    const imageBlob = await response.blob();
    const arrayBuffer = await imageBlob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    await Deno.writeFile(filePath, uint8Array);
  }


  export  async function readBlobFromFile(completePath: string): Promise<any> {
    try {
      const fileContent = await Deno.readFile(completePath);
      
      return new Blob([fileContent]);

    } catch (error) {
      throw new Error(`Error reading data from file: ${error.message}`);
    }
  }


  export async function getBase64StringFromImage(path: string): Promise<string> {
    const fileBuffer = await Deno.readFile(path);
        let binary = '';
        const bytes = new Uint8Array(fileBuffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        const base64Image = btoa(binary);
        const extension = path.split('.').pop() || 'png';

        return `data:image/${extension};base64,${base64Image}`;
  }