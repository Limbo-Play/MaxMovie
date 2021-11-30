import "./styles.scss";

export default function DescriptionWrapper({ descriptionName, description }) {
  console.log(description);
  return (
    <div className="wrapperPosition">
      <div className="descriptionName">{descriptionName}</div>
      <div className="description">{description}</div>
    </div>
  );
}
