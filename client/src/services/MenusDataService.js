import http from "../http-common";
class MenuDataService {
  getAll() {
    return http.get("/menus/");
  }
  get(id) {
    return http.get(`/tutorials/${id}`);
  }
  add(data) {
    return http.post("/menus/add", data);
  }
  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }
  delete(id) {
    return http.delete(`/menus/delete/${id}`);
  }
  deleteAll() {
    return http.delete(`/tutorials`);
  }
  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}
export default new MenuDataService();