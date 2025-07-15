import { ArgumentMetadata, ParseEnumPipe, PipeTransform } from "@nestjs/common";

export class OptionalParseEnumPipe<T = any>
  implements PipeTransform<string | undefined, Promise<T | undefined>>
{
  private readonly parseEnumPipe: ParseEnumPipe;

  constructor(enumType: T) {
    this.parseEnumPipe = new ParseEnumPipe(enumType);
  }

  async transform(
    value: string | undefined,
    metadata: ArgumentMetadata,
  ): Promise<T | undefined> {
    if (typeof value === "undefined") {
      return undefined;
    }

    return this.parseEnumPipe.transform(value, metadata);
  }
}
