const ReportCard = (prop) => {

    return (
        <div className="report-card">
            <div className="card-header">
                <h3>{prop.name}</h3>
                <h4>{prop.date}</h4>
            </div>
            <p>{prop.description}</p>
        </div>  
    );
  }
  
  export default ReportCard;