# Instructions to Launch the Project

This project includes a frontend, a backend, and an Ethereum node. Below are the steps to set up and launch each component.

## Prerequisites

Before starting, ensure you have the following tools installed:

- **Node.js**: Version 20 or higher.
- **Docker**: Version 26.1 or higher.

## Clone the Project and initiate setup of each component of the project

```bash
   git clone https://github.com/aadelop/faucet-eth.git
```

## Initiate the Ethereum node.

1. Go to node directory

```bash
   cd  nodo
```

2. Create address account that will use genesis node

``` bash
docker run -v ./data:/data -v ./pwd.txt:/pwd.txt ethereum/client-go:latest account new --datadir /datos --password /pwd.txt
```

3. Modify the genesis.json file by adding the address of the created account (located in datos/keystore dir)  in the extradata and alloc fields.


4. Initialise the node configuration with the following command:
```bash
    docker run -v ./genesis.json:/genesis.json -v ./datos:/datos ethereum/client-go:latest init --datadir /atos /genesis.json
```

5. Launch the configured node by running the following command. This will allow you to interact with the node via calls or through Metamask:

* ***Important:*** Modify ***miner.etherbase*** and ***unlock*** fields with the address specified in the genesis file in the previous steps.

``` bash
docker run -d --rm \
-v ./pwd.txt:/p.txt \
-v ./datos:/data \
-p 5556:8545 \
ethereum/client-go:v1.13.15 \
--datadir /data \
--unlock d847bfdf435d33bd4ff64f8d61f5a9cda0672cf0 \
--allow-insecure-unlock \
--mine \
--miner.etherbase d847bfdf435d33bd4ff64f8d61f5a9cda0672cf0 \
--password /p.txt \
--nodiscover \
--http \
--http.addr "0.0.0.0" \
--http.api "admin,eth,debug,miner,net,txpool,personal,web3" \
--http.corsdomain "*"
```

## Initiate the Backend.


## Initiate the Frontend.