export const goHomePage = (navigate) => {
  navigate("/trips/list");
};

export const goLoginPage = (navigate) => {
  navigate("/login");
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
