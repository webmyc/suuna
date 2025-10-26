import { e as createCollectionToGlobResultMap, f as createGetCollection } from './vendor_Mq3Ymznp.mjs';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/facilitators/dana-dragomirescu.mdx": () => import('./dana-dragomirescu_DQunWFmJ.mjs'),"/src/content/facilitators/laura-maria-yara.mdx": () => import('./laura-maria-yara_BXUehRNN.mjs'),"/src/content/facilitators/maria-hoier.mdx": () => import('./maria-hoier_C2SHFA9c.mjs'),"/src/content/facilitators/melissa-louise.mdx": () => import('./melissa-louise_BWV5HpDr.mjs'),"/src/content/facilitators/stephanie-canavesio.mdx": () => import('./stephanie-canavesio_C6LtjMKL.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"facilitators":{"type":"content","entries":{"dana-dragomirescu":"/src/content/facilitators/dana-dragomirescu.mdx","laura-maria-yara":"/src/content/facilitators/laura-maria-yara.mdx","maria-hoier":"/src/content/facilitators/maria-hoier.mdx","melissa-louise":"/src/content/facilitators/melissa-louise.mdx","stephanie-canavesio":"/src/content/facilitators/stephanie-canavesio.mdx"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/facilitators/dana-dragomirescu.mdx": () => import('./dana-dragomirescu_CG-F-gEc.mjs'),"/src/content/facilitators/laura-maria-yara.mdx": () => import('./laura-maria-yara_BZ8QTKpC.mjs'),"/src/content/facilitators/maria-hoier.mdx": () => import('./maria-hoier_D_qzEJ9k.mjs'),"/src/content/facilitators/melissa-louise.mdx": () => import('./melissa-louise_AfHQJ6W-.mjs'),"/src/content/facilitators/stephanie-canavesio.mdx": () => import('./stephanie-canavesio_COl71yc-.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
