import "./InnerContainer.scss"

export default function InnerContainer({ children }:{children:any}) {
	return (
		<div className="inner-container">{children}</div>
	)
}
