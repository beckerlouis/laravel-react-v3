<?php

namespace App\Data;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class PageData extends Data
{
    public function __construct(
        public ?SeoPageData $seo,
    ) {
    }
}
