export const mockGraphData = [
    { month: '6月', value1: 80, value2: 85 },
    { month: '7月', value1: 70, value2: 75 },
    { month: '8月', value1: 75, value2: 65 },
    { month: '9月', value1: 65, value2: 60 },
    { month: '10月', value1: 70, value2: 55 },
    { month: '11月', value1: 60, value2: 50 },
    { month: '12月', value1: 65, value2: 45 },
    { month: '1月', value1: 55, value2: 40 },
    { month: '2月', value1: 50, value2: 35 },
    { month: '3月', value1: 45, value2: 30 },
    { month: '4月', value1: 40, value2: 25 },
    { month: '5月', value1: 35, value2: 20 }
];

export const mockMealData = [
    {
        id: 1,
        image: '/images/d01.jpg',
        date: '05.21',
        type: 'Morning'
    },
    {
        id: 2,
        image: '/images/d02.jpg',
        date: '05.21',
        type: 'Lunch'
    },
    {
        id: 3,
        image: '/images/l01.jpg',
        date: '05.21',
        type: 'Lunch'
    },
    {
        id: 4,
        image: '/images/l02.jpg',
        date: '05.21',
        type: 'Dinner'
    },
    {
        id: 5,
        image: '/images/l03.jpg',
        date: '05.21',
        type: 'Dinner'
    },
    {
        id: 6,
        image: '/images/m01.jpg',
        date: '05.21',
        type: 'Dinner'
    },
    {
        id: 7,
        image: '/images/m02.jpg',
        date: '05.21',
        type: 'Dinner'
    },
    {
        id: 8,
        image: '/images/m03.jpg',
        date: '05.21',
        type: 'Morning'
    },
];

export const mockCategories = [
    { title: 'RECOMMENDED COLUMN', subtitle: 'オススメ' },
    { title: 'RECOMMENDED DIET', subtitle: 'ダイエット' },
    { title: 'RECOMMENDED BEAUTY', subtitle: '美容' },
    { title: 'RECOMMENDED HEALTH', subtitle: '健康' },
];

export const mockArticles = [
    {
        id: 1,
        image: '/images/column-1.jpg',
        date: '2021.05.17',
        time: '23:25',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリとは？',
        tags: ['魚料理', '和食', 'DHA']
    },
    {
        id: 2,
        image: '/images/column-2.jpg',
        date: '2021.05.17',
        time: '23:25',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリとは？',
        tags: ['魚料理', '和食', 'DHA']
    },
    {
        id: 3,
        image: '/images/column-3.jpg',
        date: '2021.05.17',
        time: '23:25',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリとは？',
        tags: ['魚料理', '和食', 'DHA']
    },
    {
        id: 4,
        image: '/images/column-4.jpg',
        date: '2021.05.17',
        time: '23:25',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリとは？',
        tags: ['魚料理', '和食', 'DHA']
    },
    {
        id: 5,
        image: '/images/column-5.jpg',
        date: '2021.05.17',
        time: '23:25',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリとは？',
        tags: ['魚料理', '和食', 'DHA']
    },
    {
        id: 6,
        image: '/images/column-6.jpg',
        date: '2021.05.17',
        time: '23:25',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリとは？',
        tags: ['魚料理', '和食', 'DHA']
    },
    {
        id: 7,
        image: '/images/column-7.jpg',
        date: '2021.05.17',
        time: '23:25',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリとは？',
        tags: ['魚料理', '和食', 'DHA']
    },
    {
        id: 8,
        image: '/images/column-8.jpg',
        date: '2021.05.17',
        time: '23:25',
        title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリとは？',
        tags: ['魚料理', '和食', 'DHA']
    },
];

export const mockDiaryEntries = Array(8).fill({
    date: '2021.05.21',
    time: '23:25',
    content: '私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト...',
});

export const mockExercises = [
    { name: '家事全般（立位・軽い）', duration: 10, kcal: 26 },
    { name: '家事全般（立位・軽い）', duration: 10, kcal: 26 },
].concat(Array(10).fill({ name: '家事全般（立位・軽い）', duration: 10, kcal: 26 }));

export const mockRecordCategories = [
    {
        title: 'BODY RECORD',
        subtitle: '自分のカラダの記録',
        image: '/images/MyRecommend-1.jpg',
    },
    {
        title: 'MY EXERCISE',
        subtitle: '自分の運動の記録',
        image: '/images/MyRecommend-2.jpg',
    },
    {
        title: 'MY DIARY',
        subtitle: '自分の日記',
        image: '/images/MyRecommend-3.jpg',
    },
];
