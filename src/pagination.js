    import Dom from "./dom";
    import {getPhotos} from "./main";
    import {fillPostList} from "./main";
    import {state} from "./main";

    export const Pagination = {
        code: '',
        Extend: function (data) {
            data = data || {};
            Pagination.size = data.size || 300;
            Pagination.page = data.page || 1;
            Pagination.step = data.step || 3;
            Pagination.skip = data.skip || 0;
            Pagination.limit = data.limit;

            getPhotos(Pagination.skip, Pagination.limit);
            fillPostList(state.photos);
        },

        Add: function (from, to) {
            for (let i = from; i < to; i++) {
                Pagination.code += '<a>' + i + '</a>';
            }
        },

        Last: function () {
            Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
        },

        First: function () {
            Pagination.code += '<a>1</a><i>...</i>';
        },

        Click: function () {
            Dom.loader.style.display = 'block'
            Pagination.page = +this.innerHTML;

            Pagination.ChangeSkip();
            Pagination.Start();
        },
        ChangeSkip: function () {
            if (Pagination.page >= 2) {
                Pagination.skip = (Pagination.page - 1) * Pagination.limit
            } else {
                Pagination.skip = 0;
            }

            getPhotos(Pagination.skip, Pagination.limit);
        },

        Prev: function () {
            Pagination.page--;
            if (Pagination.page < 1) {
                Pagination.page = 1;
            }

            Pagination.ChangeSkip();
            Pagination.Start();
        },

        Next: function () {
            Pagination.page++;
            if (Pagination.page > Pagination.size) {
                Pagination.page = Pagination.size;
            }

            Pagination.ChangeSkip();
            Pagination.Start();
        },

        Bind: function () {
            const a = Pagination.e.getElementsByTagName('a');

            for (let i = 0; i < a.length; i++) {
                if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
                a[i].addEventListener('click', Pagination.Click, false);
            }
        },

        Finish: function () {
            Pagination.e.innerHTML = Pagination.code;
            Pagination.code = '';
            Pagination.Bind();
        },

        Start: function () {
            if (Pagination.size < Pagination.step * 2 + 6) {
                Pagination.Add(1, Pagination.size + 1);
            }
            else if (Pagination.page < Pagination.step * 2 + 1) {
                Pagination.Add(1, Pagination.step * 2 + 4);
                Pagination.Last();
            }
            else if (Pagination.page > Pagination.size - Pagination.step * 2) {
                Pagination.First();
                Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
            }
            else {
                Pagination.First();
                Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
                Pagination.Last();
            }
            Pagination.Finish();
        },

        Buttons: function (e) {
            const nav = e.getElementsByTagName('a');
            nav[0].addEventListener('click', Pagination.Prev, false);
            nav[1].addEventListener('click', Pagination.Next, false);
        },

        Create: function (e) {
            const html = [
                '<a>&#9668;</a>',
                '<span></span>',
                '<a>&#9658;</a>'
            ];

            e.innerHTML = html.join('');
            Pagination.e = e.getElementsByTagName('span')[0];
            Pagination.Buttons(e);
        },

        Init: function (e, data) {
            Pagination.Extend(data);
            Pagination.Create(e);
            Pagination.Start();
        }
    };

    export const showPagination = (totalCountUnits, limit) => {
        Dom.loader.style.display = 'block';

        Pagination.Init(document.getElementById('pagination'), {
            size: Math.ceil(totalCountUnits / limit),
            page: 1,
            step: 3,
            skip: 0,
            limit
        });
    };

