import { ArgumentMetadata, ParseUUIDPipe, PipeTransform } from "@nestjs/common";

export class OptionalParseUUIDPipe
  implements PipeTransform<string | undefined, Promise<string | undefined>>
{
  private readonly parseUUIDPipe = new ParseUUIDPipe();

  async transform(
    value: string | undefined,
    metadata: ArgumentMetadata,
  ): Promise<string | undefined> {
    if (typeof value === "undefined") {
      return undefined;
    }

    return this.parseUUIDPipe.transform(value, metadata);
  }
}
