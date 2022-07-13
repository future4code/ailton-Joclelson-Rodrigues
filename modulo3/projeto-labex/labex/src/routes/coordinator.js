export const goHomePage = (navigate) => {
  navigate("/trips/list");
};

export const goLoginPage = (navigate) => {
  navigate("/login");
};

export const goAppFormPage = (navigate) => {
  navigate("/trips/application");
};

export const goAdmHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goBack = (navigate) => {
  navigate(-1);
};
