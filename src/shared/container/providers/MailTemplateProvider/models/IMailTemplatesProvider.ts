import IParseTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplatesProvider {
  parse(data: IParseTemplateDTO): Promise<string>;
}
