const fetchEmpData = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const randomUser = data.results[0];
  return randomUser;
};

export { fetchEmpData };
