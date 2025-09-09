// コラムセクションのデータ
const columnsData = {
  mainArticle: {
    title: "ポテンツァ施術前に知っておくべきこと",
    headerImage: "images/column.webp",
    imageAlt: "ポテンツァ施術の基礎知識",
    toc: [
      {
        title: "ポテンツァとは",
        id: "comparison",
        subItems: [
          { title: "施術の仕組み", id: "mechanism" },
          { title: "メリット・デメリット", id: "merits" }
        ]
      },
      {
        title: "ポテンツァのリスクや副作用",
        id: "risks",
        subItems: [
          { title: "起こりうる副作用", id: "side-effects" },
          { title: "痛みやダウンタイムについて", id: "pain" },
          { title: "施術前・施術後の注意点", id: "precautions" }
        ]
      },
      {
        title: "施術時の確認ポイント",
        id: "contract",
        subItems: [
          { title: "保険適用について", id: "insurance" },
          { title: "施術内容・計画を細かく確認", id: "details" },
          { title: "追加費用がかからないか確認", id: "additional-fees" },
          { title: "トラブル時の相談先", id: "troubles" }
        ]
      }
    ]
  },
  sections: [
    {
      id: "comparison",
      type: "content-section",
      title: "ポテンツァとは",
      content: 'ポテンツァは<span style="background-color: #fff3cd; padding: 2px 4px;">高周波（RF）による美肌治療</span>の一種で、マイクロニードルで皮膚に微細な穴を開け、高周波エネルギーを真皮層に届ける施術です。ニキビ跡、毛穴、肌質改善、シワ、たるみの改善に効果的です。',
      table: {
        type: "tips-comparison-table",
        headers: ["特徴", "内容"],
        rows: [
          ["施術方法", "マイクロニードル + 高周波エネルギー"],
          ["適応部位", "顔全体、首、デコルテなど"],
          ["効果", "ニキビ跡、毛穴改善、肌質向上"],
          ["ダウンタイム", "数日〜1週間程度"],
          ["施術時間", "30分〜1時間程度"],
          ["費用相場", "5万〜15万円（部位による）"],
          ["持続性", "3〜6ヶ月程度（定期的な施術が必要）"]
        ]
      },
      additionalContent: [
        "<small>（※）回数・期間は目安です。個人差や症例による違いがあります。上記は効果を保証するものではありません。</small>",
        "ポテンツァは、マイクロニードルで皮膚に微細な穴を開け、高周波エネルギーを真皮層に届けることで、コラーゲンの生成を促進し、肌質を改善する施術です。ニキビ跡や毛穴の開きが気になる方に特におすすめです。施術時間も比較的短く、日常生活への影響を最小限に抑えながら効果的に肌質を向上させることができます。"
      ]
    },
    {
      id: "mechanism",
      type: "highlight-box",
      title: "ポテンツァの施術の仕組み",
      content: [
        'ポテンツァは<span style="background-color: #fff3cd; padding: 2px 4px;">マイクロニードルで皮膚に微細な穴を開け</span>、高周波（RF）エネルギーを真皮層まで届けることで、コラーゲンの生成を促進します。熱エネルギーによるアプローチが特徴です。',
        '高周波エネルギーにより<span style="background-color: #fff3cd; padding: 2px 4px;">真皮層の細胞が活性化され、コラーゲンやエラスチンの生成が促進</span>されます。肌のハリや弾力が向上し、ニキビ跡や毛穴の改善効果が得られます。',
        '切開を行わず、マイクロニードルの微細な穴で完了するため、身体への負担が少なく、日常生活への影響も最小限に抑えられます。'
      ]
    },
    {
      id: "merits",
      type: "highlight-box",
      title: "ポテンツァのメリット・デメリット",
      content: "ポテンツァの特徴を理解し、自分に合った施術かどうかを判断する参考にしてください。",
      table: {
        type: "merit-table",
        headers: ["分類", "内容"],
        data: [
          {
            category: "メリット",
            items: [
              "マイクロニードルで肌質改善が可能",
              "ニキビ跡、毛穴、シワの改善効果",
              "ダウンタイムが比較的短い",
              "日常生活への影響が最小限"
            ]
          },
          {
            category: "デメリット",
            items: [
              "複数回の施術が必要な場合がある",
              "効果の実感まで時間がかかる場合がある",
              "施術時の軽い痛みや赤みのリスク",
              "定期的なメンテナンスが必要"
            ]
          }
        ]
      }
    },
    {
      id: "risks",
      type: "content-section",
      title: "ポテンツァのリスクや副作用",
      headerImage: "images/column2.webp",
      imageAlt: "ポテンツァの副作用について",
      content: [
        "ポテンツァはマイクロニードルによる施術のため、施術直後の赤み、腫れ、軽い痛みや熱感などの副作用が生じることがあります。施術後は保湿ケアが必要な場合もあります。",
        "施術による副作用は一時的で軽度なものがほとんどです。気になる症状があれば、必ず担当医に相談しましょう。"
      ]
    },
    {
      id: "side-effects",
      type: "highlight-box",
      title: "起こりうる副作用",
      content: "ポテンツァで起こりうる主な副作用は以下の通りです。",
      subsections: [
        { title: "施術時の痛みや熱感", content: "マイクロニードルによる軽い痛みや高周波による熱感が生じることがあります。麻酔クリームを使用することで痛みを軽減できます。通常は施術終了後すぐに治まります。" },
        { title: "赤み・腫れ", content: "施術部位に赤みや軽度の腫れが生じることがあります。通常は数日〜1週間程度で自然に治まります。" },
        { title: "皮むけ・かさつき", content: "高周波の熱により、皮むけや肌のかさつきが生じることがあります。保湿ケアをしっかり行いましょう。" },
        { title: "効果の発現時期", content: "効果が現れるまで個人差があります。施術後数週間〜数ヶ月程度で効果を実感できる場合が多いです。" }
      ]
    },
    {
      id: "pain",
      type: "highlight-box",
      title: "痛みやダウンタイムについて",
      content: [
        'ポテンツァの施術後の痛みやダウンタイムは、<span style="background-color: #fff3cd; padding: 2px 4px;">マイクロニードルによる軽い痛みと高周波による熱感、その後の赤み・腫れが主な症状</span>で、個人差があります。',
        '一般的にダウンタイムを感じやすい時期は以下の通りです。'
      ],
      list: [
        "施術直後〜数日間",
        "赤み・腫れが最も強い時期",
        "保湿ケアが必要な期間"
      ],
      listType: 'pain-area',
      additionalContent: "痛みや腫れが強い場合、または長引く場合は、担当医に相談しましょう。適切なケアと指示に従うことで、快適に回復できます。"
    },
    {
      id: "precautions",
      type: "highlight-box",
      title: "施術前・施術後の注意点",
      content: "ポテンツァの効果を最大限に引き出すため、以下の点に注意しましょう。",
      subsections: [
        { title: "施術前の準備", content: "施術前に十分なカウンセリングを受け、適応かどうか確認しましょう。日焼けを避け、抗凝固薬の使用については医師に相談してください。" },
        { title: "施術後のケア", content: "施術部位を清潔に保ち、保湿ケアをしっかり行いましょう。日焼けを避け、指示されたスキンケアを行ってください。" },
        { title: "経過観察", content: "施術後の経過を観察し、指示されたスケジュールでクリニックに通いましょう。" },
        { title: "生活習慣の管理", content: "施術前後は飲酒や激しい運動を避け、十分な休息を取ってください。体調が優れない場合は担当医に相談しましょう。" }
      ]
    },
    {
      id: "contract",
      type: "content-section",
      title: "施術時の確認ポイント",
      headerImage: "images/column3.webp",
      imageAlt: "ポテンツァ施術の注意点"
    },
    {
      id: "insurance",
      type: "highlight-box",
      title: "保険適用について",
      content: [
        "ポテンツァは高周波による美肌治療の一種で、美容目的の施術となるため、原則として自由診療（自費診療）となります。",
        "健康保険が適用されるのは、機能障害がある場合に限られます。通常の美肌目的の場合は自費となります。",
        '<span style="background-color: #fff3cd; padding: 2px 4px;">原則自費負担</span>のため、施術前に総額や追加費用を確認しましょう。'
      ]
    },
    {
      id: "details",
      type: "highlight-box",
      title: "施術内容・計画を細かく確認する",
      content: [
        "ポテンツァを契約する際は、施術計画・範囲・効果の期待値などを具体的に確認しましょう。自分の目標や希望に合っているかが重要です。",
        "例えば「ニキビ跡の改善」と言っても、施術回数や使用するチップの種類、施術間隔などがクリニックによって異なります。",
        '施術後に計画が変更となる場合、追加料金が発生することもあるため、<span style="background-color: #fff3cd; padding: 2px 4px;">施術前に施術内容をしっかり確認</span>しておきましょう。'
      ]
    },
    {
      id: "additional-fees",
      type: "highlight-box",
      title: "追加費用がかからないか確認する",
      content: [
        "施術時には、追加の費用についても必ず確認しましょう。提示料金とは別に、追加施術・薬剤代・経過観察費用などが発生する場合があります。",
        "追加費用が掛かる項目の例は以下の通りです。"
      ],
      list: [
        "追加施術費用",
        "チップ追加代",
        "経過観察費用",
        "保湿剤材料費",
        "アフターケア費用"
      ],
      additionalContent: "追加費用については、施術前に必ず確認するようにしてください。"
    },
    {
      id: "troubles",
      type: "highlight-box",
      title: "トラブル時の相談先",
      content: "万が一、ポテンツァ施術についてトラブルになった場合は、以下の窓口に相談できます。",
      consultationList: [
        { name: "医療安全支援センター", url: "https://www.anzen-shien.jp/center/", description: "医療に関する苦情・心配事の相談" },
        { name: "消費者ホットライン", url: "https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/", description: "施術内容や契約条件など、契約に関する相談" },
        { name: "医療相談窓口", url: "https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/", description: "医療に関する広告についての相談" }
      ]
    }
  ]
};

// コラムセクションを外部管理して挿入
(function injectMedicalColumns() {
  const root = document.getElementById('medical-columns-root');
  if (!root) return;

  const data = columnsData;

  const generateToc = (toc) => {
    return toc.map(item => `
      <li class="toc-item">
        <a href="#${item.id}" class="toc-link">${item.title}</a>
        ${(item.subItems || []).map(sub => `
          <div class="toc-sub-item">
            <a href="#${sub.id}" class="toc-link">${sub.title}</a>
          </div>
        `).join('')}
      </li>
    `).join('');
  };

  const generateComparisonTable = (table) => `
    <table class="tips-comparison-table">
      <thead class="table-header">
        <tr>
          ${table.headers.map(h => `<th>${h}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${table.rows.map(row => `
          <tr class="table-row">
            ${row.map((cell, index) => index === 0 ? `<td class="row-header">${cell}</td>` : `<td>${cell}</td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
  
  const generateMeritTable = (table) => `
    <table class="merit-table">
        <thead>
            <tr>
                ${table.headers.map(h => `<th class="merit-header">${h}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            ${table.data.map(d => `
                <tr>
                    <td class="merit-category">${d.category}</td>
                    <td class="merit-content">
                        <ul>
                            ${d.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    </table>
  `;

  const generateTable = (table) => {
    if (!table) return '';
    switch (table.type) {
      case 'tips-comparison-table':
        return generateComparisonTable(table);
      case 'merit-table':
        return generateMeritTable(table);
      default:
        return '';
    }
  };

  const generateSections = (sections) => {
    return sections.map(section => {
      const contentHtml = (Array.isArray(section.content) ? section.content.map(p => `<div class="section-content">${p}</div>`).join('') : (section.content ? `<div class="section-content">${section.content}</div>` : '')) || '';
      const additionalContentHtml = (section.additionalContent ? `<div class="section-content">${section.additionalContent}</div>` : '') || '';
      const headerImageHtml = section.headerImage ? `
        <div class="header-image" style="margin: 16px 0;">
          <img src="${section.headerImage}" alt="${section.imageAlt}" style="width: 100%; height: 100%; object-fit: cover;" loading="lazy">
        </div>` : '';
      const tableHtml = generateTable(section.table);
      const listHtml = section.list ? (section.listType === 'pain-area' ? 
        `<div class="pain-area-box">${section.list.map(item => `<div class="pain-area">${item}</div>`).join('')}</div>` : 
        `<ul class="fee-list">${section.list.map(item => `<li class="fee-item">${item}</li>`).join('')}</ul>`) : '';

      const subsectionsHtml = section.subsections ? section.subsections.map(sub => `
        <div class="subsection-title">${sub.title}</div>
        <div class="section-content">${sub.content}</div>
      `).join('') : '';

      const consultationListHtml = section.consultationList ? `
        <ul class="contact-list">
          ${section.consultationList.map(item => `
            <li class="contact-item">
              <i class="fas fa-phone"></i>
              <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="contact-link" style="position: relative; z-index: 10; display: inline-block;">${item.name}（${item.description}）</a>
            </li>
          `).join('')}
        </ul>` : '';

      let sectionInnerHtml = '';
      if (section.type === 'content-section') {
        sectionInnerHtml = `
          <div class="content-section" id="${section.id}">
            <div class="section-title">${section.title}</div>
            ${headerImageHtml}
            ${contentHtml}
            ${tableHtml}
            ${additionalContentHtml}
          </div>`;
      } else if (section.type === 'highlight-box') {
        sectionInnerHtml = `
          <div class="highlight-box" id="${section.id}">
            <div class="section-title">${section.title}</div>
            ${contentHtml}
            ${tableHtml}
            ${subsectionsHtml}
            ${listHtml}
            ${additionalContentHtml}
            ${consultationListHtml}
          </div>`;
      }
      
      return `<div class="article-card">${sectionInnerHtml}</div>`;
    }).join('');
  };

  const mainArticleHtml = `
    <div class="article-card">
      <div class="article-header">
        <div class="article-title">${data.mainArticle.title}</div>
        <div class="header-image">
          <img src="${data.mainArticle.headerImage}" alt="${data.mainArticle.imageAlt}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
      </div>
      <div class="toc-section">
        <div class="toc-title">目次</div>
        <ul class="toc-list">${generateToc(data.mainArticle.toc)}</ul>
      </div>
    </div>
  `;

  const sectionsHtml = generateSections(data.sections);

  root.innerHTML = `
    <div class="columns-container">
      ${mainArticleHtml}
      ${sectionsHtml}
    </div>
  `;
})();
