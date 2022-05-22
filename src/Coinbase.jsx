import { useWeb3React } from "@web3-react/core";
import { connectors } from "./connectors.js";
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function Coinbase() {
  const { activate, deactivate, active, chainId, account } = useWeb3React();
  const imgSize = 26;

  return (
    <div>
      <Button
        variant="outlined"
        id="connect-button"
        onClick={() => {
          activate(connectors.coinbaseWallet);
        }}
      >
        <img
          alt=""
          src="https://demo.storj-ipfs.com/ipfs/QmZDf4LrzsJfEreeFFx3dbEg4e345EqMMascmf5VvoXpJP"
          height={imgSize}
          width={imgSize}
        />
      </Button>


      <Button
        variant="outlined"
        id="connect-button"
        onClick={() => {
          activate(connectors.walletConnect);
        }}
      >
        <img
          alt=""
          src="https://demo.storj-ipfs.com/ipfs/QmWurqmXGPSoTQqwH7iDSGJuiXKoPA8n1f8kpZdX9hYoKQ"
          height={imgSize}
          width={imgSize}
        />
      </Button>

      <Button
        variant="outlined"
        id="connect-button"
        onClick={() => {
          activate(connectors.injected);
        }}
      >
        <img
          alt=""
          src="https://demo.storj-ipfs.com/ipfs/Qmboo7p1D7oWaPhtKgugiavL9JrQ7Q24c1pU4xPTdmSKgZ"
          height={imgSize}
          width={imgSize}
        />
      </Button>

      {active && (
        <Button id="disconnect-button" onClick={deactivate} variant="outlined">
          Disconnect
        </Button>
      )}
      <div>
        <h4>
          Connection Status:{" "}
          {active ? "CONNECTION SUCCESSFUL" : "NOT CONNECTED"}
        </h4>
      </div>
      {active && (
        <>
          <h4>
            Account: 0xf745...0c67<ContentCopyIcon id="copy-icon"/> | Network ID: {chainId}
          </h4>
        </>
      )}
    </div>
  );
}

export default Coinbase;
