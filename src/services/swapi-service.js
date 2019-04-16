
export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`)
      }
      return await res.json();
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    }
  
    getPerson(id) {
      return this.getResource(`/people/${id}/`);
    }
  
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
  
    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transformPlanet(planet);
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
  
    getStarship(id) {
      return this.getResource(`/starships/${id}/`);
    }
    _transformPlanet(planet) {
      return {
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
      }
    }
  }