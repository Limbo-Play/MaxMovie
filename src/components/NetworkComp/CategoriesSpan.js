import './styles.scss'
export default function CategoriesSpan({ children, name, isActive, handleChangeGenres }) {

    
    return (
        <div onClick={handleChangeGenres} className={` categoriesSpan ${
        isActive ? "categoriesSpanActive" : ""
      }`}>
            <div className="iconPosition">
               {children}
                <span className="namePosition">{name}</span>
            </div>
        </div>
    )
}