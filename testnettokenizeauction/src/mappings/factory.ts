import {Minted} from '../../generated/templates/Factory/Factory'
import {TokenizeNFT} from '../../generated/schema'

export function handleMinted(event: Minted): void{

    let nft = TokenizeNFT.load(event.params.tokenAddress.toHexString());
    if(nft==null){
        nft = new TokenizeNFT(event.params.tokenAddress.toHexString());
    }
    nft.hash = event.params.urlIpfs;
    nft.save();

}