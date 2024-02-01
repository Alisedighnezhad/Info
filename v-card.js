function so(){
    document.getElementById("Contact").className = "unshow";
    document.getElementById("Social").className = "show";
    document.getElementById("Company").className = "unshow";
    document.getElementById("so_btn").style.color = "#000000";
    document.getElementById("con_btn").style.color = "#A2A2A2";
    document.getElementById("com_btn").style.color = "#A2A2A2";
    document.getElementById("so_btn").style.backgroundColor = "#FFFFFF";
    document.getElementById("con_btn").style.backgroundColor = "#171717";
    document.getElementById("com_btn").style.backgroundColor = "#171717";
  }
  function con(){
    document.getElementById("Contact").className = "show";
    document.getElementById("Social").className = "unshow";
    document.getElementById("Company").className = "unshow";
    document.getElementById("so_btn").style.color = "#A2A2A2";
    document.getElementById("con_btn").style.color = "#000000";
    document.getElementById("com_btn").style.color = "#A2A2A2";
    document.getElementById("con_btn").style.backgroundColor = "#FFFFFF";
    document.getElementById("com_btn").style.backgroundColor = "#171717";
    document.getElementById("so_btn").style.backgroundColor = "#171717";
  }
  function Com(){
    document.getElementById("Contact").className = "unshow";
    document.getElementById("Social").className = "unshow";
    document.getElementById("Company").className = "show";
    document.getElementById("so_btn").style.color = "#A2A2A2";
    document.getElementById("con_btn").style.color = "#A2A2A2";
    document.getElementById("com_btn").style.color = "#000000";
    document.getElementById("con_btn").style.backgroundColor = "#171717";
    document.getElementById("com_btn").style.backgroundColor = "#FFFFFF";
    document.getElementById("so_btn").style.backgroundColor = "#171717";
  }