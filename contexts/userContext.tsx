/**
 * React
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
/**
 * Utils
 */
import { useWeb3Context } from "./Web3Context";
import { assetsInWallet } from "../utils/openSeaAPI";
import { getSubgraphData } from "../utils/graphQueries";
/**
 * Helpers
 */
import {
  createObject,
  createOpenSeaObject,
} from "../utils/nftHelpers";

type UserContextType = {
  tokenizes: null | any[];
  fraktions: null | any[];
  nfts: null | any[];
  balance: number;
};
export const UserContext = createContext(null);

export const UserContextProviderFC = ({ children }) => {
  const [tokenizes, setTokenizes] = useState(null);
  const [fraktions, setFraktions] = useState(null);
  const [nfts, setNFTs] = useState(null);
  const [walletAssets, setWalletAssets] = useState(null);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { account } = useWeb3Context();

  useEffect(() => {
    if (account) {
      fetchNFTs();
    }
  }, [account]);

  useEffect(() => {
    if (window && tokenizes?.length > 0) {
      const mintingNFTsString = window?.localStorage.getItem('mintingNFTs');
      tokenizes?.forEach((tokenize) => {
        if (tokenize?.id === mintingNFTsString) {
          window?.localStorage.removeItem('mintingNFTs');
        }
      });
    }
  }, [tokenizes]);

  const fetchNFTs = useCallback(
    // if user not in subgraph, fails to complete and show other nfts !!
    async () => {
      try {
        //TODO - REMOVE THIS
        setLoading(true);
        let totalNFTs = [];
        let nftsERC721_wallet;
        let nftsERC1155_wallet;
        let fraktionsObjects;
        let fraktionsObjectsClean;
        let userBalanceFormatted;
        let tokenizesClean: null | any[];
        let totalAddresses: null | string[];
        let nftObjectsClean;

        let openseaAssets = await assetsInWallet( account, {
          limit: 60,
          offset: 0
        });

        setWalletAssets(openseaAssets.assets);
        let fobjects = await getSubgraphData(
          "wallet",
            account?.toLocaleLowerCase()
        );

        if (fobjects && fobjects.users.length) {
          // balance retrieval
          let userBalance = fobjects.users[0].balance;
          userBalanceFormatted = parseFloat(userBalance) / 10 ** 18;
          // Fraktions retrieval
          let validFraktions = fobjects.users[0].fraktions.filter(x => {
            return x != null;
          });

          fraktionsObjects = await Promise.all(
            validFraktions.map(x => {
              return createObject(x);
            })
          );

          if (fraktionsObjects) {
            fraktionsObjectsClean = fraktionsObjects.filter(x => {
              return x != null;
            });
          }
          // Tokenizes retrieval
          let userTokenizesFetched = fobjects.users[0].tokenizes;

          let userTokenizeObjects = await Promise.all(
            userTokenizesFetched.map(x => {
              return createObject(x);
            })
          );

          if (userTokenizeObjects) {
            tokenizesClean = userTokenizeObjects.filter(x => {
              return x != null && x.imageURL;
            });
          }

          let userTokenizeAddresses = tokenizesClean.map(x => {
            return x.id;
          });

          let userFraktionsAddreses = fraktionsObjectsClean.map(x => {
            return x.id;
          });

          totalAddresses = userTokenizeAddresses.concat(userFraktionsAddreses);
        }

        if (
          openseaAssets &&
          openseaAssets.assets &&
          openseaAssets.assets.length
        ) {
          nftsERC721_wallet = openseaAssets.assets.filter(x => {
            return x.asset_contract.schema_name == "ERC721";
          });

          if (nftsERC721_wallet && nftsERC721_wallet.length) {
            totalNFTs = totalNFTs.concat(nftsERC721_wallet);
          }
          nftsERC1155_wallet = openseaAssets.assets.filter(x => {
            return x.asset_contract.schema_name == "ERC1155";
          });

          totalNFTs = nftsERC721_wallet.concat(nftsERC1155_wallet);
          if (!fobjects || !fobjects.users[0] || !fobjects.users[0].tokenizes) {
            totalAddresses = [];
          }

          // NFTs filtering
          let nftsFiltered = totalNFTs.map(x => {
            if (!totalAddresses.includes(x.asset_contract.address)) {
              return x;
            }
          });

          let nftObjects = await Promise.all(
            nftsFiltered.map(x => {
              return createOpenSeaObject(x);
            })
          );

          if (nftObjects) {
            nftObjectsClean = nftObjects.filter(x => {
              return x != null && x.imageURL;
            });
          } else {
            nftObjectsClean = nftObjects;
          }

          setTokenizes(tokenizesClean);
          setFraktions(fraktionsObjectsClean);
          setNFTs(nftObjectsClean);
          setBalance(userBalanceFormatted);
        }
        //TODO: detect account and states change > refresh
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [account]
  );

  return (
    <UserContext.Provider
      value={{ tokenizes, fraktions, nfts, balance, loading, fetchNFTs, walletAssets }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const { tokenizes, fraktions, nfts, balance, loading, fetchNFTs, walletAssets } = useContext(
    UserContext
  );
  return {
    tokenizes,
    fraktions,
    nfts,
    balance,
    loading,
    fetchNFTs,
    walletAssets
  };
};