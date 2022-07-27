export const goHomePage = (navigate) => {
  navigate("/trips/list");
};

const token = localStorage.getItem('token')

export const goLoginPage = (navigate) => {
  if(token === null){
    navigate("/login");
  }else {
    navigate("/admin/trips/list")
  }
};

export const goAppFormPage = (navigate) => {
  navigate("/trips/application");
};

export const goCreateTripPage = (navigate) => {
  navigate("/admin/trips/create");
};

export const goBack = (navigate) => {
  navigate(-1);
};
