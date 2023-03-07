// 大分類、小分類、商品名の選択肢を配列でそれぞれ用意
const categories = [
  '化粧品',
  'ヘルスケア',
  'アンティーク',
  '全品',
  'その他'
];

// 小分類と商品名は、それぞれ一つ前の選択肢と紐付けるためにオブジェクト型を使う
const subCategories = [
  {category: '化粧品', name: 'ファンデーション'},
  {category: '化粧品', name: 'アイライン'},
  {category: '化粧品', name: 'アイシャドウ'},
  {category: '化粧品', name: 'チーク'},
  {category: '化粧品', name: 'リップ'},
  {category: 'ヘルスケア', name: '食品'},
  {category: 'ヘルスケア', name: 'サプリ'},
  {category: 'ヘルスケア', name: 'グッズ'},
  {category: 'アンティーク', name: 'あいうえお'},
  {category: 'アンティーク', name: 'かきくけこ'},
  {category: 'アンティーク', name: 'さしすせそ'},
  {category: '全品', name: '---'},
  {category: 'その他', name: '---'}
];

const products = [
  {subCategory: 'ファンデーション', name: 'f_aaa'},
  {subCategory: 'ファンデーション', name: 'f_bbb'},
  {subCategory: 'ファンデーション', name: 'f_ccc'},
  {subCategory: 'ファンデーション', name: 'f_ddd'},
  {subCategory: 'アイライン', name: 'a_aaa'},
  {subCategory: 'アイライン', name: 'a_bbb'},
  {subCategory: 'アイライン', name: 'a_ccc'},
  {subCategory: 'アイシャドウ', name: 'i_aaa'},
  {subCategory: 'アイシャドウ', name: 'i_bbb'},
  {subCategory: 'チーク', name: 't_aaa'},
  {subCategory: 'チーク', name: 't_bbb'},
  {subCategory: 'リップ', name: 'r_aaa'},
  {subCategory: 'リップ', name: 'r_bbb'},
  {subCategory: '食品', name: 'ブルーベリーパワー'},
  {subCategory: '食品', name: '熟成黒酢ドリンク'},
  {subCategory: 'サプリ', name: 'ビタミンCプレミア'},
  {subCategory: 'サプリ', name: 'マルチビタミン'},
  {subCategory: 'グッズ', name: 'g_aaa'},
  {subCategory: 'グッズ', name: 'g_bbb'},
  {subCategory: '---', name: '---'}
];

// 「選択してください」というプルダウンの選択肢を作成する関数
function firstOption() {
  const first = document.createElement('option');
  first.textContent = '選択してください';

  return first;
}

// 引数に指定されたノードをすべて削除する関数
function optionClear(node) {
  const options = document.querySelectorAll(node);
  options.forEach(option => {
    option.remove();
  });
}

const categorySelect = document.getElementById('choice1');
const subCategorySelect = document.getElementById('choice2');
const productSelect = document.getElementById('choice3');

// 大分類のプルダウンを生成
categories.forEach(category => {
  const option = document.createElement('option');
  option.textContent = category;

  categorySelect.appendChild(option);
});

// 大分類が選択されたら小分類のプルダウンを生成
categorySelect.addEventListener('input', () => {

  // 小分類のプルダウンを「選択してください」のみにし、選択（クリック）できるようにする
  optionClear('#choice2 > option');
  subCategorySelect.appendChild(firstOption());
  subCategorySelect.disabled = false;

  // 商品のプルダウンを「選択してください」のみにし、選択（クリック）できないようにする
  optionClear('#choice3 > option');
  productSelect.appendChild(firstOption());
  productSelect.disabled = true;

  // 大分類が選択されていない（「選択してください」になっている）とき、小分類を選択（クリック）できないようにする
  if (categorySelect.value == '選択してください') {
    subCategorySelect.disabled = true;
    return;
  }

  // 大分類で選択されたカテゴリーと同じ小分類のみを、プルダウンの選択肢に設定する
  subCategories.forEach(subCategory => {
    if (categorySelect.value == subCategory.category) {
      const option = document.createElement('option');
      option.textContent = subCategory.name;

      subCategorySelect.appendChild(option);
    }
  });
});

// 小分類が選択されたら商品のプルダウンを生成
subCategorySelect.addEventListener('input', () => {

  // 商品のプルダウンを「選択してください」のみにし、選択（クリック）できるようにする
  optionClear('#choice3 > option');
  productSelect.appendChild(firstOption());
  productSelect.disabled = false;

  // 小分類が選択されていない（「選択してください」になっている）とき、商品を選択（クリック）できないようにする
  if (subCategorySelect.value == '選択してください') {
    productSelect.disabled = true;
    return;
  }

  // 小分類で選択されたカテゴリーと同じ商品のみを、プルダウンの選択肢に設定する
  products.forEach(product => {
    if (subCategorySelect.value == product.subCategory) {
      const option = document.createElement('option');
      option.textContent = product.name;

      productSelect.appendChild(option);
    }
  });
});