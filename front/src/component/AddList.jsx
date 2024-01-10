
function AddList(){
function fun(){
  window.open("https://www.youtube.com/");
  console.log("hello world");
}
return(
  <div className="container mt-5">
  <div className="row">
    <div className="col-6 mb-3">
        <input type="text" className="form-control"id="txt" placeholder="Enter to here " />
    </div>
    <div className="col-4">
      <input type="date" id="date"className="form-control" />
    </div>
    <div className="col-2">
    <button type="button" id="btnadd"className="btn btn-success form-control" onClick={fun()}>Add</button>

    </div>
  </div>
</div>

)

}

export default AddList;