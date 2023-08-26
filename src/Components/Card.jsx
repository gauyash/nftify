import React from "react";
import { Icon } from "@iconify/react";

const Card = ({ data }) => {
  // Check if data is empty, if so, return null
  if (data.length === 0) {
    return null;
  }

  // Function to render a section within the card
  const renderCardSection = (heading, content) => (
    <div className="flex items-center justify-between">
      <h5>{heading}</h5>
      <p className="card_platform">{content}</p>
    </div>
  );

  // Function to render a token card (base or quote)
  const renderTokenCard = (token, icon) => (
    <div className="card">
      <h3 className="card_heading">{token.title}</h3>
      <div className="flex flex-col gap-sm">
        {renderCardSection("Name", token.name)}
        {renderCardSection("Symbol", token.symbol)}
        {renderCardSection("Address", `#${token.address.slice(-4)}`)}
      </div>
      <div className="icon flex items-center justify-center">
        <Icon icon={icon} width="30" />
      </div>
    </div>
  );

  // Function to render the price card
  const renderPriceCard = (item) => (
    <div className="card">
      <h3 className="card_heading">Price</h3>
      <div className="flex flex-col gap-sm">
        {renderCardSection("Price Native", `${item.baseToken.symbol} ${parseInt(item.priceNative).toFixed(2)}`)}
        {renderCardSection("Price USD", `${item.priceUsd}m`)}
      </div>
      <div className="icon flex items-center justify-center">
        <Icon icon="pepicons-pop:dollar" width="30" />
      </div>
    </div>
  );

  // Map over the data and render each card
  const dataElements = data.map((item, index) => (
    <div key={index} className="flex gap-lg">
      {/* Basic Info Card */}
      <div className="card">
        <h3 className="card_heading">Basic Info</h3>
        <div className="flex flex-col gap-sm">
          {renderCardSection("Pair created at", item.baseToken.name)}
          {renderCardSection("Symbol", item.baseToken.symbol)}
          {renderCardSection("Dex ID", item.dexId)}
          {renderCardSection("Pair Address", `#${item.pairAddress.slice(-4)}`)}
        </div>
        <div className="icon flex items-center justify-center">
          <Icon icon="ic:outline-info" width="30" />
        </div>
      </div>

      {/* Base Token Card */}
      {renderTokenCard(item.baseToken, "material-symbols:token-outline")}

      {/* Quote Token Card */}
      {renderTokenCard(item.quoteToken, "material-symbols:token-outline")}

      {/* Price Card */}
      {renderPriceCard(item)}
    </div>
  ));

  // Return the container with all data elements
  return <div className="card_container">{dataElements}</div>;
};

export default Card;
