<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class AppData extends Data
{
    public function __construct(
        public ?SeoPageData $seo,
        public FlashData $flash,
        public array $ziggy,
    ) {
    }

    public static function fromModel($array): self
    {
        return new self(
            seo: SeoPageData::from($array['seo']),
            flash: FlashData::from($array['flash']),
            ziggy: $array['ziggy'],
        );
    }
}
