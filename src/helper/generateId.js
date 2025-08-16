

class GenerateId {
  static create() {
    return "id_" + Math.random().toString(36).substr(2, 9);
  }
}


const generateId = new GenerateId();

export default generateId;