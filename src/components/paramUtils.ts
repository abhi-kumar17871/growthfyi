export const calculatePageMetrics = (pageResult: any[]) => {
  let waitingTime = 0;
  let timeToSecureConnection = 0;
  let downloadTime = 0;
  let timeToInteractive = 0;
  let domComplete = 0;
  let largestContentfulPaint = 0;

  pageResult[0].result[0].items.forEach((result: { page_timing: { waiting_time: any; time_to_secure_connection: any; download_time: any; time_to_interactive: any; dom_complete: any; largest_contentful_paint: any; }; }) => {
    if (result.page_timing) {
      waitingTime += result.page_timing.waiting_time || 0;
      timeToSecureConnection += result.page_timing.time_to_secure_connection || 0;
      downloadTime += result.page_timing.download_time || 0;
      timeToInteractive += result.page_timing.time_to_interactive || 0;
      domComplete += result.page_timing.dom_complete || 0;
      largestContentfulPaint += result.page_timing.largest_contentful_paint || 0;
    }
  });

  const itemCount = pageResult[0].result[0].items.length;

  return {
    waitingTime: waitingTime / itemCount,
    timeToSecureConnection: timeToSecureConnection / itemCount,
    downloadTime: downloadTime / itemCount,
    timeToInteractive: timeToInteractive / itemCount,
    domComplete: domComplete / itemCount,
    largestContentfulPaint: largestContentfulPaint / itemCount,
  };
};


export const SocialMedia = (pageResult: any[]) => {
  let ogtitle = "";
  let ogdesc = "";
  let ogtype = "";
  let ogimage = "";
  let twittercard = "";
  let twittersite = "";
  let twittercreator = "";
  const social = pageResult[0].result[0].items[0].meta?.social_media_tags;
  if (social) {
    if (social["og:title"])
      ogtitle = social["og:title"];
    if (social["og:description"])
      ogdesc = social["og:description"];
    if (social["og:type"])
      ogtype = social["og:type"];
    if (social["og:image"])
      ogimage = social["og:image"];
    if (social["twitter:card"])
      twittercard = social["twitter:card"];
    if (social["twitter:site"])
      twittersite = social["twitter:site"];
    if (social["twitter:creator"])
      twittercreator = social["twitter:creator"];
  }
  return {
    ogtitle, ogdesc, ogimage, ogtype, twittercard, twittercreator, twittersite
  };
};

export const HTags = (pageResult: any[]) => {
  const htags = pageResult[0].result[0].items[0].meta.htags;

  return {
    htags
  };
};


export const onPageResults = (pageResult: any[]) => {
  let onPageScore = 0;
  let internalLinks = 0;
  let externalLinks = 0;
  let numberOfImages = 0;
  let imagesSizes = 0;
  let scripts = 0;
  let scriptsSize = 0;
  let plainTextSize = 0;
  let plainTextRate = 0;
  let plainTextWordCount = 0;
  let automatedReadabilityIndex = 0;
  let colemanLiauReadabilityIndex = 0;
  let daleChallReadabilityIndex = 0;
  let fleschKincaidReadabilityIndex = 0;
  let smogReadabilityIndex = 0;
  let descriptionToContentConsistency = 0;
  let titleToContentConsistency = 0;

  pageResult[0].result[0].items.forEach((result: {
    [x: string]: any;
    meta: {
      [x: string]: any;
    };
  }) => {
    if (result?.onpage_score)
      onPageScore += result?.onpage_score;
    if (result.meta?.internal_links_count)
      internalLinks += result.meta?.internal_links_count;
    if (result.meta?.external_links_count)
      externalLinks += result.meta?.external_links_count;
    if (result.meta?.images_size)
      imagesSizes += result.meta?.images_size;
    if (result.meta?.images_count)
      numberOfImages += result.meta?.images_count;
    if (result.meta?.scripts_count)
      scripts += result.meta?.scripts_count;
    if (result.meta?.scripts_size)
      scriptsSize += result.meta?.scripts_size;
    if (result.meta?.content?.plain_text_size)
      plainTextSize += result.meta.content?.plain_text_size;
    if (result.meta?.content?.plain_text_rate)
      plainTextRate += result.meta.content?.plain_text_rate;
    if (result.meta?.content?.plain_text_word_count)
      plainTextWordCount += result.meta.content?.plain_text_word_count;
    if (result.meta?.content?.automated_readability_index)
      automatedReadabilityIndex += result.meta.content?.automated_readability_index;
    if (result.meta?.content?.coleman_liau_readability_index)
      colemanLiauReadabilityIndex += result.meta.content?.coleman_liau_readability_index;
    if (result.meta?.content?.dale_chall_readability_index)
      daleChallReadabilityIndex += result.meta.content?.dale_chall_readability_index;
    if (result.meta?.content?.flesch_kincaid_readability_index)
      fleschKincaidReadabilityIndex += result.meta.content?.flesch_kincaid_readability_index;
    if (result.meta?.content?.smog_readability_index)
      smogReadabilityIndex += result.meta.content?.smog_readability_index;
    if (result.meta?.content?.description_to_content_consistency)
      descriptionToContentConsistency += result.meta.content?.description_to_content_consistency;
    if (result.meta?.content?.title_to_content_consistency)
      titleToContentConsistency += result.meta.content?.title_to_content_consistency;
  });

  const itemCount = pageResult[0].result[0].items.length;

  return {
    onPageScore: onPageScore / itemCount,
    internalLinks: internalLinks / itemCount,
    externalLinks: externalLinks / itemCount,
    numberOfImages: numberOfImages / itemCount,
    imagesSizes: imagesSizes / itemCount,
    scripts: scripts / itemCount,
    scriptsSize: scriptsSize / itemCount,
    plainTextSize: plainTextSize / itemCount,
    plainTextRate: plainTextRate / itemCount,
    plainTextWordCount: plainTextWordCount / itemCount,
    automatedReadabilityIndex: automatedReadabilityIndex / itemCount,
    colemanLiauReadabilityIndex: colemanLiauReadabilityIndex / itemCount,
    daleChallReadabilityIndex: daleChallReadabilityIndex / itemCount,
    fleschKincaidReadabilityIndex: fleschKincaidReadabilityIndex / itemCount,
    smogReadabilityIndex: smogReadabilityIndex / itemCount,
    descriptionToContentConsistency: descriptionToContentConsistency / itemCount,
    titleToContentConsistency: titleToContentConsistency / itemCount,
  };
};

