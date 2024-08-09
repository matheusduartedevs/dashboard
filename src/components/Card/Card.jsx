import "./Card.css";

// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { title, amount, growth, icon, backgroundColor } = data;

  return (
    <div className="card" style={{ backgroundColor }}>
      <div className="card-header">
        <div className="card-icon" style={{ color: backgroundColor }}>
          {icon}
        </div>
      </div>
      <div className="card-body">
        <h2 className="amount">R${amount}</h2>
        <div className="growth">
          <p>{title}</p>
          <span>{growth}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
