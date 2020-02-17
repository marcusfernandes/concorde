import api from '../../config/api';

class DomainController {
  async index(req, res) {
    const repsonse = await api.get('/WhoisService', {
      params: {
        domainName: 'criattus.com.br',
      },
    });

    return res.json(repsonse.data);
  }

  async store(req, res) {}
}

export default new DomainController();
