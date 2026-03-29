const AppHeader = ({done, active}) => {
  return(
    <div className="row">
      <div className="col-6">
        <h1>мой список дел</h1>
      </div>
      <div className="col-6">
        <h1 className="text-secondary">{active} Активно {done} Сделано </h1>
      </div>
    </div>
  )
}

export default AppHeader;






