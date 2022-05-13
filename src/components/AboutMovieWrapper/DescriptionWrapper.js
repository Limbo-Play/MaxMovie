import "./styles.scss";

export default function DescriptionWrapper({ descriptionName, description }) {
  return (
    <div className="wrapperPosition">
      <div className="descriptionName">{descriptionName}</div>
      <div className="description">{description}</div>
    </div>
  );
}
