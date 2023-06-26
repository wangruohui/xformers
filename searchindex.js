Search.setIndex({"docnames": ["components/attentions", "components/feedforward", "components/index", "components/mha", "components/ops", "components/position_embedding", "components/reversible", "custom_parts/index", "factory/block", "factory/index", "factory/model", "index", "tutorials/aotautograd_nvfuser", "tutorials/blocksparse", "tutorials/extend_attentions", "tutorials/hierarchical", "tutorials/index", "tutorials/pytorch_encoder", "tutorials/reversible", "tutorials/sparse_vit", "tutorials/triton", "tutorials/use_attention", "what_is_xformers"], "filenames": ["components/attentions.rst", "components/feedforward.rst", "components/index.rst", "components/mha.rst", "components/ops.rst", "components/position_embedding.rst", "components/reversible.rst", "custom_parts/index.rst", "factory/block.rst", "factory/index.rst", "factory/model.rst", "index.rst", "tutorials/aotautograd_nvfuser.rst", "tutorials/blocksparse.rst", "tutorials/extend_attentions.rst", "tutorials/hierarchical.rst", "tutorials/index.rst", "tutorials/pytorch_encoder.rst", "tutorials/reversible.rst", "tutorials/sparse_vit.rst", "tutorials/triton.rst", "tutorials/use_attention.rst", "what_is_xformers.rst"], "titles": ["Attention mechanisms", "Feedforward mechanisms", "API Reference", "Multi Head Attention", "xFormers optimized operators", "Position Embeddings", "Reversible layer", "Custom parts reference", "Block factory", "Factory", "Model factory", "Welcome to xFormers\u2019s documentation!", "How to Enable Fused Operations Using AOTAutograd and NVFuser", "Using BlockSparseAttention", "Extend the xFormers parts zoo", "Hierarchical Transformers", "Tutorials", "Building an encoder, comparing to PyTorch", "Using the Reversible block", "Replace all attentions from an existing ViT model with a sparse equivalent?", "Using Triton-based layers", "I\u2019m only interested in testing out the attention mechanisms that are hosted here", "What is xFormers?"], "terms": {"class": [0, 1, 3, 4, 5, 6, 8, 10, 14, 18], "xformer": [0, 1, 2, 3, 5, 6, 7, 8, 10, 12, 13, 15, 16, 18, 19, 20, 21], "compon": [0, 1, 3, 5, 6, 12, 13, 14, 18, 19, 21], "scaleddotproduct": [0, 19], "dropout": [0, 1, 3, 4, 5, 10, 11, 12, 13, 14, 17, 21], "float": [0, 1, 3, 4, 5, 14, 17], "0": [0, 3, 4, 5, 7, 13, 17, 21], "causal": [0, 4, 10, 13, 14, 17], "bool": [0, 1, 3, 5, 6, 8, 10, 14, 18], "fals": [0, 3, 6, 10, 14, 15, 17, 18, 19, 20], "seq_len": [0, 5, 10, 13, 15, 17, 21], "option": [0, 1, 3, 4, 8, 9, 10, 11, 14, 17, 18], "int": [0, 1, 3, 4, 5, 6, 14, 17, 18], "none": [0, 1, 3, 4, 8, 10, 14, 17, 20], "to_seq_len": 0, "arg": [0, 1, 3, 5, 6, 14], "kwarg": [0, 1, 3, 5, 6, 8, 13, 14, 18], "sourc": [0, 1, 3, 4, 5, 6, 7, 8, 10, 19, 22], "base": [0, 1, 4, 5, 7, 8, 10, 11, 14, 16, 19, 21], "implement": [0, 5, 7, 8, 12, 17, 18], "scale": [0, 4, 7, 17], "dot": [0, 7, 17], "product": [0, 7, 17], "propos": [0, 3, 10, 15, 17, 18, 19, 20, 22], "all": [0, 3, 4, 11, 14, 16, 18, 20, 21, 22], "you": [0, 3, 7, 13, 14, 15, 17, 18, 19, 20, 21, 22], "need": [0, 3, 4, 7, 13, 14, 17, 18], "vaswani": [0, 3, 17, 18], "et": [0, 3, 5, 10, 17, 18], "al": [0, 3, 5, 10, 17, 18], "mask": [0, 3, 4, 7, 13, 17, 19, 21], "attentionmask": [0, 8], "forward": [0, 1, 3, 4, 5, 6, 8, 10, 12, 13, 14, 17, 18], "q": [0, 3, 4, 5, 14], "tensor": [0, 1, 3, 4, 5, 6, 8, 10, 14, 17, 18, 19, 20], "k": [0, 3, 4, 5, 14], "v": [0, 3, 4, 14], "att_mask": [0, 3, 8, 13, 19], "union": [0, 1, 4, 5, 8, 10, 18], "A": [0, 3, 4, 5, 7, 8, 10, 12, 13, 15, 17, 18], "2d": 0, "3d": 0, "which": [0, 1, 4, 5, 7, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22], "ignor": 0, "certain": 0, "posit": [0, 2, 10, 11, 17], "If": [0, 4, 13, 17], "boolean": [0, 18], "valu": [0, 3, 4, 7, 13, 17, 22], "true": [0, 1, 3, 6, 7, 10, 13, 14, 17, 18, 20], "keep": [0, 17], "while": [0, 17], "kei": [0, 1, 3, 4, 5, 13], "pad": [0, 4, 15], "dimens": [0, 3, 4, 13, 15, 17, 20, 21], "batch": [0, 3, 4, 13, 14, 17, 21], "x": [0, 4, 5, 6, 7, 8, 14, 17, 18, 20, 21], "sequenc": [0, 3, 4, 12, 13, 15, 17, 18, 20, 21], "length": [0, 3, 4, 13], "OR": 0, "can": [0, 3, 4, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22], "combin": [0, 11, 12, 18, 21], "pass": [0, 4, 12, 13, 18], "here": [0, 11, 12, 13, 16, 17], "method": [0, 5], "maybe_merge_mask": 0, "provid": [0, 3, 7, 12, 13, 15, 20, 21], "util": 0, "us": [0, 1, 3, 4, 5, 7, 10, 11, 14, 16, 17, 19, 21], "merg": 0, "ha": [0, 4, 17], "type": [0, 1, 4, 5, 14, 17], "an": [0, 4, 5, 11, 12, 13, 15, 16, 20, 21], "addit": [0, 4], "expect": [0, 3, 17, 20, 21], "ar": [0, 3, 4, 5, 7, 9, 11, 12, 14, 15, 16, 17, 18, 19, 20, 22], "inf": [0, 4], "localattent": [0, 17], "window_s": 0, "5": [0, 4], "force_spars": 0, "__init__": [0, 10, 14, 18], "slide": 0, "window": 0, "routingtransform": 0, "longform": 0, "bigbird": 0, "paramet": [0, 3, 4, 17, 19, 21], "probabl": [0, 4, 13, 17], "output": [0, 3, 4, 10, 18, 19], "randomli": 0, "drop": [0, 13, 17, 20], "train": [0, 1, 3, 5, 6, 8, 10, 12, 17], "time": [0, 12, 13, 17, 20], "appli": [0, 4, 14, 18], "cannot": [0, 4, 17, 22], "futur": [0, 17], "overal": [0, 12], "size": [0, 3, 4, 13], "local": [0, 14, 17, 20, 22], "odd": 0, "number": [0, 3, 4, 15, 18, 20], "evenli": 0, "distribut": [0, 18], "both": [0, 14], "side": 0, "each": [0, 4, 20, 22], "queri": [0, 3, 4, 5, 13], "linformerattent": 0, "linform": [0, 17], "from": [0, 1, 4, 5, 7, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21], "self": [0, 1, 3, 4, 13, 14, 18], "linear": [0, 4, 11, 17], "complex": 0, "wang": 0, "2020": [0, 18], "The": [0, 3, 4, 5, 7, 10, 12, 13, 14, 15, 17, 18, 19, 20, 21], "origin": [0, 15, 18], "notat": 0, "kept": 0, "nystromattent": [0, 14], "num_head": [0, 3, 10, 13, 14, 17, 19, 21], "num_landmark": [0, 14], "64": [0, 14, 15, 17], "landmark_pool": [0, 14], "modul": [0, 1, 3, 5, 6, 7, 8, 10, 12, 14, 18, 19], "use_razavi_pinvers": [0, 14], "pinverse_original_init": [0, 14], "inv_iter": [0, 14], "6": [0, 4, 7, 13, 14, 17], "v_skip_connect": [0, 14], "conv_kernel_s": [0, 14], "nystrom": [0, 14, 17], "nystromform": 0, "algorithm": 0, "approxim": 0, "xiong": 0, "y": [0, 4, 6, 17, 20], "zeng": 0, "z": 0, "chakraborti": 0, "r": [0, 7, 18], "tan": 0, "m": [0, 4, 11, 16, 18], "fung": 0, "g": [0, 6, 18], "li": 0, "singh": 0, "2021": [0, 20], "refer": [0, 11, 19, 22], "codebas": 0, "http": [0, 20], "github": [0, 7], "com": [0, 7], "mlpen": 0, "key_padding_mask": [0, 3], "onli": [0, 4, 7, 10, 11, 12, 16, 20], "accept": [0, 12, 14], "must": [0, 4, 12], "1": [0, 4, 5, 6, 12, 13, 15, 17, 18, 19, 20, 21], "correct": 0, "mean": [0, 17, 18, 22], "randomattent": [0, 17], "01": 0, "constant_mask": 0, "random": [0, 13], "instanc": [0, 1, 5, 10, 14], "case": [0, 4, 12, 17, 19, 20, 21], "attend": [0, 4, 17], "set": [0, 4, 7, 17, 18], "thi": [0, 1, 3, 4, 5, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22], "spars": [0, 11, 13, 16], "awar": [0, 3, 19, 20], "empti": [0, 4, 13], "part": [0, 1, 4, 5, 12, 16, 17], "repres": [0, 12], "memori": [0, 2, 8, 11, 12, 13, 17, 18], "ratio": 0, "same": [0, 4, 14, 17, 18], "orthoformerattent": 0, "32": [0, 4, 13, 15], "subsample_fract": 0, "landmark_select": 0, "landmarkselect": 0, "orthogon": 0, "orthoform": 0, "your": [0, 14, 17, 18, 21], "ey": 0, "ball": 0, "trajectori": 0, "video": 0, "transform": [0, 5, 8, 10, 11, 16, 19, 20, 22], "patrick": 0, "campbel": 0, "d": [0, 4], "asano": 0, "misra": 0, "i": [0, 4, 11, 16], "metz": 0, "f": [0, 4, 6, 13, 18], "feichtenhof": 0, "c": [0, 14], "vedaldi": 0, "henriqu": 0, "j": 0, "facebookresearch": 0, "motionform": 0, "globalattent": 0, "attention_query_mask": [0, 21], "_": [0, 5], "__": [0, 5], "global": 0, "label": 0, "other": [0, 5, 12, 14, 17, 18, 19, 20, 22], "neg": [0, 4], "ani": [0, 1, 4, 5, 7, 10, 14, 19, 20, 22], "element": [0, 15, 17], "zero": [0, 4], "torch": [0, 4, 13, 14, 17, 18, 19, 20, 21], "favorattent": 0, "dim_featur": 0, "dim_head": [0, 15], "iter_before_redraw": 0, "feature_map_typ": 0, "featuremaptyp": 0, "smreg": 0, "normalize_input": 0, "kernel": [0, 4, 11, 20], "perform": [0, 4, 12, 20], "rethink": 0, "choromanski": 0, "favor": [0, 17], "stand": 0, "fast": [0, 4, 13, 22], "via": [0, 4, 18], "featur": [0, 17], "space": [0, 4], "step": [0, 17], "call": [0, 1, 4, 5, 14], "befor": [0, 4], "redraw": 0, "map": 0, "being": [0, 3, 13, 20, 22], "typic": [0, 15, 19, 20], "sub": 0, "multi": [0, 2, 4, 11, 18, 21], "head": [0, 2, 4, 11, 13, 17, 18, 21], "classmethod": [0, 1, 3, 4, 8, 10], "from_config": [0, 1, 3, 5, 8, 10, 17], "config": [0, 1, 3, 5, 8, 10, 14, 15, 17], "attentionconfig": [0, 14], "abstract": 0, "additive_mask": 0, "is_caus": 0, "object": [0, 4, 10, 17], "hold": 0, "along": [0, 4, 13, 15, 17, 20], "coupl": [0, 7, 14, 17, 20], "helper": [0, 10, 13, 15, 18, 19, 21], "attribut": 0, "to_bool": 0, "from_bool": 0, "creat": [0, 4, 7, 11], "given": [0, 1, 4, 5, 10, 14, 19, 21, 22], "pattern": [0, 12, 13, 19], "warn": [0, 7, 11], "we": [0, 4, 7, 12, 13, 14, 15, 17, 18, 19, 21], "assum": [0, 1, 4, 5, 17], "impli": 0, "should": [0, 4, 17, 18, 21], "comput": [0, 4, 7, 12, 13, 18], "from_multipl": 0, "multipl": [0, 17, 18], "make_caus": [0, 4], "devic": [0, 4, 13, 17, 21], "dtype": [0, 4, 13, 17], "make_crop": 0, "return": [0, 4, 17, 19], "crop": 0, "whose": 0, "underli": 0, "view": 0, "one": [0, 4, 13, 14, 15, 17, 18, 19, 22], "properti": 0, "is_spars": 0, "ndim": 0, "shape": [0, 4, 12, 17, 19], "build_attent": [0, 21], "dict": [0, 1, 5, 10, 21], "str": [0, 1, 4, 5, 10], "build": [0, 1, 5, 13, 16, 18, 21, 22], "name": [0, 1, 5, 7, 10, 14, 17, 19, 21], "determin": [0, 1, 5], "what": [0, 1, 5, 17], "instanti": [0, 1, 5, 17, 21], "For": [0, 1, 4, 5, 17], "my_attent": 0, "foo": [0, 1, 5], "bar": [0, 1, 5], "find": [0, 1, 5], "wa": [0, 1, 5, 14, 18, 21], "regist": [0, 1, 3, 5, 14], "see": [0, 1, 4, 5, 7, 12, 17, 18], "register_attent": [0, 14], "subclass": [0, 1, 5], "decor": [0, 1, 5], "allow": [0, 1, 4, 5, 12, 21, 22], "configur": [0, 1, 5, 10, 14, 15], "file": [0, 1, 5, 21], "even": [0, 1, 5, 14], "itself": [0, 1, 5], "librari": [0, 1, 3, 5, 11, 17, 22], "mlp": [1, 10, 12, 15, 17, 18], "dim_model": [1, 3, 5, 10, 13, 17, 21], "activ": [1, 7, 10, 11, 12, 17, 18], "hidden_layer_multipli": [1, 10, 17], "bia": [1, 3, 4, 11, 12, 17], "input": [1, 3, 4, 12, 17, 18, 21], "feedforwardconfig": 1, "build_feedforward": 1, "attent": [1, 2, 5, 7, 10, 11, 13, 14, 16, 17, 18], "my_feedforward": 1, "register_feedforward": 1, "optim": [2, 11, 12, 20, 22], "oper": [2, 11, 16, 20], "effici": [2, 11, 15, 18], "mechan": [2, 3, 4, 11, 14, 16, 17, 19], "feedforward": [2, 11, 12, 15, 17, 18], "embed": [2, 3, 4, 10, 11, 15, 17], "revers": [2, 8, 10, 11, 16, 17], "layer": [2, 10, 11, 12, 15, 16, 18], "multiheaddispatch": [3, 13, 17, 21], "tupl": [3, 4, 5, 8], "residual_dropout": [3, 10, 13, 17, 21], "use_separate_proj_weight": 3, "dim_kei": 3, "dim_valu": 3, "in_proj_contain": [3, 17], "inputproject": [3, 17], "use_rotary_embed": [3, 10, 15], "out_proj": 3, "dispatch": [3, 4, 21], "project": 3, "end": 3, "follow": [3, 4, 7, 10, 14, 15, 17, 18, 19, 20, 22], "architectur": [3, 14, 15, 17, 21, 22], "actual": [3, 13, 20], "vari": [3, 4], "well": [3, 12, 19], "wrap": [3, 18], "make": [3, 4, 13, 15, 17, 18, 20, 21], "them": [3, 14, 18, 20], "model": [3, 7, 9, 12, 15, 16, 18, 21, 22], "whether": [3, 18, 21], "amount": 3, "residu": [3, 17, 18], "path": [3, 14, 17, 18, 21], "differ": [3, 4, 13, 14, 17, 18], "weight": [3, 10, 19], "rotari": [3, 5], "emb": [3, 10, 13, 17], "dim": [3, 18, 19], "multiheaddispatchconfig": 3, "op": 4, "memory_efficient_attent": 4, "attn_bia": 4, "attentionbia": 4, "p": [4, 17], "attentionfwopbas": 4, "attentionbwopbas": 4, "doe": [4, 18], "Not": 4, "o": 4, "n": [4, 14, 17, 18], "2": [4, 12, 13, 15, 17, 18], "format": 4, "b": [4, 18], "h": 4, "where": [4, 13, 15], "per": [4, 13, 17], "have": [4, 12, 13, 15, 17, 19], "3": [4, 7, 12, 15, 17, 18, 19, 21], "contigu": 4, "requir": [4, 13, 14, 18], "last": [4, 20], "s": [4, 13, 14, 15, 17, 19, 20, 21], "stride": [4, 15], "equival": [4, 11, 16, 17], "pytorch": [4, 11, 12, 13, 16, 19, 20], "code": [4, 7, 14, 20, 21], "attn": 4, "transpos": 4, "softmax": [4, 11], "exampl": [4, 7, 10, 12, 13, 15, 17, 19, 20], "import": [4, 13, 15, 17, 19, 20, 21], "xop": 4, "regular": 4, "With": [4, 17], "lowertriangularmask": 4, "support": [4, 7, 17, 19, 20], "hardwar": 4, "nvidia": [4, 17, 20], "gpu": [4, 7, 12, 18, 20], "capabl": [4, 7, 20], "abov": [4, 7, 17, 18, 19], "p100": 4, "datatyp": 4, "f16": 4, "bf16": 4, "f32": 4, "rais": 4, "notimplementederror": 4, "mha": [4, 17, 18], "valueerror": 4, "invalid": 4, "mq": 4, "mkv": 4, "kv": 4, "matrix": [4, 13], "default": [4, 7, 12, 14, 17], "common": [4, 7], "fmha": 4, "also": [4, 7, 12, 14, 17, 18, 20, 22], "arbitrari": 4, "slower": 4, "disabl": 4, "factor": 4, "attentionopbas": 4, "recommend": [4, 14], "best": 4, "depend": [4, 5, 21], "custom": [4, 17], "argument": [4, 14], "That": [4, 21], "function": [4, 12, 13, 18, 19], "abil": 4, "add": 4, "qk": 4, "t": [4, 17], "calcul": 4, "n_queri": 4, "most": 4, "contain": 4, "infin": 4, "form": 4, "so": [4, 13, 14, 17, 20, 22], "some": [4, 7, 12, 13, 15, 17, 18, 19, 20, 21], "children": 4, "defin": [4, 10, 13, 14, 17, 18, 19, 22], "altern": [4, 17, 19, 21], "thing": [4, 14], "when": [4, 7, 17, 18, 19, 20], "instead": 4, "materi": 4, "hardcod": 4, "better": [4, 12, 13, 20], "lowertriangularmaskwithtensorbia": 4, "blockdiagonalmask": 4, "blockdiagonalcausalmask": 4, "float32": 4, "cpu": 4, "veri": [4, 17, 18, 20, 21], "slow": [4, 7], "don": [4, 17], "attempt": [4, 12], "debug": 4, "test": [4, 10, 11, 12, 14, 16, 17, 22], "like": [4, 14, 15, 17, 18, 19, 20, 21], "q_seqlen": 4, "k_seqlen": 4, "baseoper": 4, "cutlass": 4, "fwop": 4, "bwop": 4, "flash": 4, "triton": [4, 10, 11, 12, 13, 16, 17], "small_k": 4, "not_supported_reason": 4, "list": [4, 10, 17], "reason": 4, "why": 4, "run": [4, 13, 17, 20], "larg": [4, 18], "includ": [4, 10, 17, 18], "without": [4, 18], "tensorcor": 4, "old": 4, "sm60": 4, "tri": 4, "dao": 4, "phil": 4, "tillet": 4, "small": [4, 13, 15], "pre": [4, 10, 15, 17], "amper": 4, "bmk": 4, "extra": [4, 13, 14, 18, 19], "reshap": 4, "might": 4, "done": [4, 14], "deprec": 4, "new": [4, 14, 17, 21, 22], "tensor_arg": 4, "tensor_kwarg": 4, "lower": [4, 12, 13], "triangular": [4, 13], "aka": 4, "farther": 4, "initi": [4, 12, 21], "than": [4, 7, 13, 17, 18, 20], "q_seqinfo": 4, "_seqleninfo": 4, "k_seqinfo": 4, "_batch_siz": 4, "block": [4, 6, 7, 9, 12, 13, 14, 16, 22], "diagon": 4, "divid": 4, "handl": [4, 15], "from_tensor_list": 4, "16": [4, 13, 15, 17, 19, 21], "float16": [4, 13], "cuda": [4, 11, 12, 13, 19, 20], "list_x": 4, "randn": [4, 13], "nn": [4, 12, 13, 14, 18, 19, 20], "unbind": 4, "out": [4, 11, 13, 16, 17], "list_out": 4, "split": 4, "print": [4, 13, 17], "assert": 4, "from_seqlen": 4, "kv_seqlen": 4, "concaten": 4, "back": 4, "m_i": 4, "thei": [4, 7, 9, 11], "correspond": [4, 10, 20], "sum_i": 4, "invers": 4, "token": [4, 15], "possibl": [4, 10, 13, 15, 17, 20, 21], "make_causal_from_bottomright": 4, "blockdiagonalcausalfrombottomrightmask": 4, "prefix": 4, "except": 4, "nor": 4, "note": [4, 8, 12, 13, 17, 18, 19], "num_kei": 4, "num_queri": 4, "otherwis": 4, "vector": 4, "nearer": 4, "final": 4, "blockdiagonalcausalwithoffsetpaddedkeysmask": 4, "_paddedseqleninfo": 4, "causal_diagon": 4, "offset": 4, "total": 4, "12": 4, "three": [4, 14], "max": 4, "4": [4, 15, 17], "want": [4, 7, 14, 19], "first": [4, 17, 18], "kv_pad": 4, "e": [4, 7], "area": 4, "upperbound": 4, "individu": 4, "unus": 4, "bc": 4, "memory_efficient_attention_backward": 4, "grad": 4, "lse": 4, "gradient": 4, "dq": 4, "dk": 4, "dv": 4, "explan": 4, "memory_efficient_attention_forward_requires_grad": 4, "memory_efficient_attention_forward": 4, "backward": [4, 12], "later": 4, "positional_embed": 5, "rotaryembed": 5, "roform": 5, "su": 5, "crucial": [5, 15], "insight": 5, "rotat": 5, "matric": 5, "rel": 5, "avail": [5, 10, 20], "repo": [5, 22], "gpt": 5, "neox": 5, "inspir": [5, 22], "sinepositionalembed": 5, "positionembed": 5, "vocabembed": [5, 17], "vocab_s": [5, 10, 17], "init_weight": [5, 10], "gain": 5, "build_positional_embed": 5, "positionembeddingconfig": 5, "encod": [5, 8, 10, 11, 16], "my_position_encod": 5, "register_positional_embed": 5, "determinist": 6, "net": 6, "record_rng": 6, "set_rng": 6, "reversibleblock": [6, 18], "split_dim": 6, "f_arg": [6, 18], "g_arg": [6, 18], "backward_pass": 6, "dy": 6, "reversiblesequ": [6, 18], "modulelist": [6, 17, 18], "arg_rout": [6, 18], "transpar": 7, "sputnik": 7, "These": [7, 12, 15, 20], "instal": 7, "recipi": 7, "machin": 7, "abl": 7, "compil": [7, 12, 20], "git": 7, "clone": 7, "fairintern": 7, "conda": 7, "xformer_env": 7, "python": [7, 12, 17, 20], "8": [7, 13, 17, 19], "cd": 7, "pip": 7, "txt": 7, "issu": [7, 12], "relat": [7, 18], "nvcc": 7, "current": [7, 12, 17, 20], "runtim": [7, 17], "match": [7, 13, 15], "often": 7, "chang": [7, 12, 13, 17], "unload": 7, "load": 7, "xx": 7, "version": [7, 15], "gcc": 7, "re": [7, 17, 19, 21], "torch_cuda_arch_list": 7, "env": 7, "variabl": 7, "architur": 7, "suggest": 7, "setup": 7, "comprehens": 7, "export": 7, "7": [7, 15, 17], "automat": [7, 14, 22], "trigger": [7, 14], "enough": [7, 13], "less": [7, 18], "30": 7, "There": [7, 14, 17, 20, 21], "noth": 7, "specif": [7, 22], "do": [7, 14, 19, 21], "tutori": [7, 17, 20], "visibl": 7, "enabl": [7, 11, 14, 16, 20], "condit": 7, "met": 7, "independ": 7, "limit": [7, 13, 20], "present": [7, 15], "fullfil": 7, "block_factori": 8, "xformerencoderblock": [8, 17], "xformerencoderconfig": [8, 17, 18], "vanilla": [8, 17], "static": 8, "get_reversible_lay": 8, "input_mask": 8, "xformerdecoderblock": 8, "xformerdecoderconfig": [8, 18], "decod": [8, 10, 17], "yet": [8, 18], "target": 8, "encoder_att_mask": 8, "decoder_att_mask": 8, "complet": [9, 18, 21], "were": 9, "primarili": 9, "develop": 9, "ci": 9, "benchmark": [9, 12, 14, 17, 20, 22], "purpos": 9, "model_factori": [10, 17, 18], "xformerconfig": [10, 15, 17], "stack_config": [10, 17], "tie_embedding_weight": 10, "weight_init": 10, "xformerweightinit": 10, "vit": [10, 11, 16], "structur": 10, "full": [10, 11, 12, 16], "stack": [10, 17, 18], "It": [10, 14, 15, 17, 20], "share": [10, 14], "between": [10, 13, 15, 18], "improv": [10, 22], "languag": [10, 20], "press": 10, "xformer_config": [10, 15], "turn": [10, 17, 18, 21], "effect": [10, 18], "block_typ": [10, 17], "num_lay": [10, 17, 18], "residual_norm_styl": [10, 15, 17], "position_encoding_config": [10, 17], "vocab": [10, 17], "context": [10, 18], "multi_head_config": [10, 17], "res_drop": 10, "attention_mechanism_str": 10, "attn_drop": [10, 17], "feedforward_config": [10, 17], "fusedmlp": 10, "mlp_drop": 10, "gelu": 10, "mlp_multipli": [10, 15], "xformerblockconfig": 10, "serial": 10, "gener": [10, 15, 17], "easili": [10, 17, 21, 22], "bypass": 10, "use_deep_norm": 10, "src": [10, 17], "tgt": [10, 17], "encoder_input_mask": 10, "decoder_input_mask": 10, "fork": [11, 14], "increas": [11, 12, 18, 20], "level": 11, "verbos": 11, "sidebar": 11, "host": [11, 16], "flexibl": [11, 12, 17, 22], "interoper": [11, 22], "state": [11, 22], "art": [11, 22], "factori": [11, 15, 18], "replac": [11, 16, 17, 20], "exist": [11, 16, 17], "blocksparseattent": [11, 16], "how": [11, 16, 19, 20], "fuse": [11, 16], "aotautograd": [11, 16], "nvfuser": [11, 16], "extend": [11, 16, 17, 22], "zoo": [11, 16, 22], "interest": [11, 16, 17], "compar": [11, 12, 13, 16, 18, 20, 22], "hydra": 11, "intro": 11, "In": [11, 19, 20, 21], "practic": [11, 14, 19], "norm": [11, 17, 18], "hierarch": [11, 16], "aot": 12, "autograd": [12, 20], "toolkit": 12, "functorch": 12, "acceler": 12, "broadli": 12, "extract": 12, "graph": 12, "ahead": 12, "joint": 12, "deep": 12, "learn": 12, "fusion": 12, "memory_efficient_fus": 12, "wrapper": 12, "conveni": 12, "wai": [12, 17], "leverag": [12, 17], "fusabl": 12, "togeth": 12, "singl": 12, "found": 12, "insid": 12, "notabl": 12, "nvfusedbiasactivationdropout": 12, "readili": 12, "across": [12, 15, 22], "show": [12, 19], "signific": 12, "speed": [12, 17], "unfus": 12, "eager": 12, "approach": 12, "up": [12, 14, 17, 18], "5x": 12, "speedup": 12, "2x": 12, "On": [12, 13], "averag": 12, "peak": [12, 13], "usag": 12, "although": [12, 21], "infrequ": 12, "6x": 12, "larger": 12, "against": [12, 22], "our": [12, 13, 19], "plot": 12, "pleas": [12, 13, 17, 18, 19], "readm": [12, 14], "_is_functorch_avail": 12, "flag": [12, 21], "behavior": 12, "caus": 12, "offer": [12, 17], "great": 12, "deal": [12, 18], "user": 12, "either": [12, 20, 21], "entir": [12, 17], "howev": [12, 15], "becaus": [12, 17], "yield": 12, "error": [12, 17], "explor": 12, "further": 12, "blockspars": 13, "tile": 13, "construct": [13, 14, 17], "simpl": 13, "just": [13, 15, 17, 19, 20], "minimum": 13, "coeffici": 13, "alreadi": [13, 17, 19], "mind": [13, 19], "perfect": 13, "fine": [13, 21], "after": 13, "fact": 13, "grain": 13, "still": 13, "dens": 13, "maxpool": 13, "convert": 13, "binari": 13, "layout": 13, "now": [13, 14, 17, 19], "power": 13, "two": [13, 18, 20, 21], "let": [13, 14, 17, 19], "look": [13, 17], "seq": [13, 17, 21], "2048": [13, 17], "1024": [13, 17, 21], "block_siz": 13, "try": [13, 17], "realli": [13, 15, 17, 22], "could": [13, 15, 17], "anyth": [13, 15, 22], "causal_mask": 13, "tril": 13, "ones": 13, "causal_layout": 13, "_you": 13, "head_": 13, "commod": 13, "multihead": [13, 21], "multi_head": [13, 21], "respons": 13, "half": 13, "fw": [13, 18], "data": [13, 21], "remov": 13, "blockif": 13, "requires_grad": 13, "particular": [13, 19], "att_val": 13, "bonu": 13, "vs": 13, "def": [13, 14, 18, 19], "mem_us": 13, "fn": 13, "titl": 13, "bookeep": 13, "start": [13, 17, 20], "empty_cach": 13, "reset_peak_memory_stat": 13, "synchron": 13, "stop": 13, "report": 13, "max_memori": 13, "max_memory_alloc": 13, "20": 13, "mb": [13, 17], "round": 13, "1e6": 13, "1e3": 13, "ms": 13, "pytorch_multihead": 13, "multiheadattent": 13, "batch_first": [13, 17], "attn_mask": [13, 19], "v100": [13, 17, 20], "9": [13, 17], "someth": [13, 14, 17, 18, 21], "line": [13, 20], "151mb": 13, "619m": 13, "393mb": 13, "837m": 13, "more": [13, 14, 15, 17, 18, 19, 21, 22], "get": [13, 18, 19, 20], "bias": 13, "result": [13, 17, 20], "toward": 13, "privat": 14, "work": [14, 19, 21], "progress": 14, "would": [14, 17, 19, 21], "point": [14, 17, 20], "directli": [14, 17, 20, 21], "order": 14, "submit": 14, "pr": [14, 22], "unit": [14, 17, 20], "loos": 14, "inherit": 14, "expos": [14, 17, 18, 19, 21], "exact": [14, 17], "interfac": [14, 17, 20], "consid": [14, 17, 18, 19], "dataclass": 14, "nystromselfattentionconfig": 14, "paper": [14, 18], "remark": 14, "extens": [14, 22], "explicitli": 14, "constructor": [14, 17], "field": [14, 22], "registr": 14, "snippet": 14, "ti": 14, "open": [14, 18], "least": 14, "tool": 14, "toolbox": 14, "relev": [14, 22], "pick": 14, "variant": [14, 22], "go": 14, "pytest": 14, "my_component_nam": 14, "applic": [14, 17, 18, 20], "lra": [14, 17], "json": 14, "job": [14, 17], "As": [14, 20], "remind": 14, "inform": 14, "dedic": 14, "python3": [14, 17, 20], "run_task": 14, "py": [14, 17, 20], "task": 14, "config_path": 14, "world_siz": 14, "slurm": 14, "cluster": 14, "batch_submit": 14, "ck": 14, "checkpo": 14, "log": [14, 20], "process": [15, 18], "mani": [15, 17, 20], "unchang": 15, "cross": 15, "depth": [15, 19], "prove": 15, "domain": [15, 22], "seem": 15, "benefit": [15, 18], "cnn": 15, "tradeoff": [15, 18], "spatial": 15, "extent": 15, "ie": 15, "express": 15, "through": [15, 22], "patch_embed": 15, "translat": [15, 19], "anoth": [15, 18], "easier": 15, "truncat": 15, "metaform": 15, "hierarchical_config": 15, "basiclayerconfig": 15, "get_hierarchical_configur": 15, "base_hierarchical_config": 15, "attention_mechan": 15, "scaled_dot_product": 15, "patch_siz": [15, 19], "image_s": 15, "128": [15, 17], "320": 15, "256": 15, "fill": 15, "gap": 15, "walk": 17, "hierarchi": 17, "whole": 17, "mai": [17, 19], "ll": 17, "comparison": 17, "similar": [17, 20, 21], "transformerencoderlay": 17, "Its": [17, 18], "d_model": 17, "nhead": 17, "dim_feedforward": 17, "relu": [17, 20], "layer_norm_ep": 17, "1e": 17, "05": 17, "free": [17, 18], "worth": 17, "convent": 17, "forget": 17, "permut": 17, "similarli": [17, 18], "wherea": 17, "opposit": 17, "negat": 17, "fairli": 17, "close": [17, 18], "systemat": 17, "evalu": 17, "autom": 17, "prefer": 17, "put": 17, "think": 17, "declar": 17, "explicit": 17, "everyth": [17, 21], "sweep": [17, 21], "friendli": 17, "said": 17, "384": [17, 21], "encoder_config": 17, "post": 17, "whatev": 17, "encodinhg": 17, "sens": 17, "lead": 17, "lot": [17, 21], "check": [17, 19], "catch": 17, "earli": 17, "dummi": [17, 21], "rand": [17, 21], "ab": 17, "tranform": [17, 20], "alwai": 17, "pure": [17, 20], "ad": [17, 20], "primit": [17, 20], "am": 17, "pytorchtransform": 17, "512": 17, "num_encoder_lay": 17, "num_decoder_lay": 17, "custom_encod": 17, "exempl": 17, "below": 17, "custom_decod": 17, "appl": 17, "chosen": 17, "basi": 17, "my_config": [17, 21], "constitut": 17, "save": [17, 18], "repeat": 17, "multi_head_config_mask": 17, "multi_head_config_cross": 17, "quit": 17, "few": 17, "knob": 17, "littl": [17, 21], "mostli": 17, "taken": 17, "care": 17, "benchmark_pytorch_transform": 17, "loss": 17, "everi": [17, 22], "89": 17, "1182": 17, "2709": 17, "155": 17, "1950": 17, "4117": 17, "ve": 17, "replic": 17, "demonstr": 17, "minim": [17, 19], "duplic": 17, "built": [17, 21], "top": 17, "advanc": 17, "doc": 17, "basic": 17, "packag": 17, "api": [17, 21], "encoder_loc": 17, "encoder_random": 17, "decoder_nystrom_favor": 17, "_self_": 17, "_target_": 17, "overrid": 17, "commandlin": 17, "build_model": 17, "my_model": 17, "dict_kei": 17, "pose_encod": 17, "inplac": 17, "position_embed": 17, "word_embed": 17, "resid_drop": 17, "proj": 17, "in_featur": [17, 20], "out_featur": [17, 20], "sequenti": [17, 18], "1536": 17, "wrap_att": 17, "prenorm": 17, "fusedlayernorm": 17, "sublay": 17, "wrap_ff": 17, "postnorm": 17, "launch": 17, "multirun": 17, "gomez": 18, "reform": 18, "unrel": 18, "lsh": 18, "chunk": 18, "lightli": 18, "adapt": 18, "robin": 18, "bruegger": 18, "lucidrain": 18, "x1": 18, "x2": 18, "produc": 18, "y1": 18, "y2": 18, "recov": 18, "detail": 18, "checkpoint": 18, "One": 18, "natur": 18, "help": 18, "commun": 18, "cost": 18, "moreov": 18, "made": 18, "exactli": 18, "formul": 18, "accuraci": 18, "affect": 18, "verifi": 18, "repositori": [18, 19], "main": 18, "take": [18, 19, 21], "rout": 18, "compat": [18, 20], "ddp": 18, "xformerstackconfig": 18, "block_config": 18, "becom": [18, 21], "ren": 18, "urtasun": 18, "gross": 18, "2017": 18, "network": 18, "backpropag": 18, "store": 18, "kitaev": 18, "kaiser": 18, "\u0142": 18, "levskaya": 18, "sai": 19, "experi": 19, "reus": [19, 22], "imag": 19, "aspect": 19, "notebook": 19, "exhaust": 19, "timm": 19, "vision_transform": 19, "visiontransform": 19, "timm_sparse_attent": 19, "timmsparseattent": 19, "img_siz": 19, "224": 19, "embed_dim": 19, "96": 19, "mlp_ratio": 19, "qkv_bia": 19, "norm_lay": 19, "layernorm": 19, "suppos": 19, "snipper": 19, "precis": 19, "sever": 19, "attention_pattern": 19, "my_fancy_mask": 19, "recurs": 19, "monkei": 19, "patch": 19, "replace_attn_with_xformers_on": 19, "module_output": 19, "isinst": 19, "qkv": 19, "child": 19, "named_children": 19, "add_modul": 19, "del": 19, "variat": 19, "exchang": 19, "good": 19, "idea": 19, "closer": 19, "exhibit": 19, "clear": 19, "sparsiti": 19, "alter": 19, "manual": 19, "sparsifi": 19, "parallel": 20, "program": 20, "backend": 20, "short": 20, "jit": 20, "toolchain": 20, "famili": 20, "consolid": 20, "hoc": 20, "goal": 20, "over": 20, "lang": 20, "org": 20, "02": 20, "html": 20, "sphx": 20, "glr": 20, "log_softmax": 20, "amp": 20, "throughput": 20, "operand": 20, "simpli": 20, "fusedlinearlay": 20, "my_linear_lay": 20, "squared_relu": 20, "skip": 20, "septemb": 20, "faster": 20, "non": 20, "sigmoid": 20, "fp16": 20, "usecas": 20, "serv": 20, "measur": [20, 22], "laptop": 20, "3080": 20, "10": 20, "reproduc": 20, "benchmark_triton_layernorm": 20, "gb": 20, "benchmark_triton_dropout": 20, "own": 21, "requires_head_dimens": 21, "defer": 21, "obscur": 21, "hopefulli": 21, "straightforward": 21, "intern": 21, "sure": 21, "programat": 21, "search": [21, 22], "definit": 21, "attention_nam": 21, "my": 21, "focus": 22, "agnost": 22, "design": 22, "compos": 22, "ideal": 22, "break": 22, "studi": 22, "ablat": 22, "aim": 22, "easi": 22, "focu": 22, "engin": 22, "effort": 22, "And": 22, "sinc": 22, "heavi": 22, "alon": 22, "happen": 22, "anytim": 22, "somebodi": 22, "crowd": 22, "welcom": 22, "move": 22, "too": 22}, "objects": {"xformers.components": [[3, 0, 1, "", "MultiHeadDispatch"], [0, 3, 0, "-", "attention"], [1, 3, 0, "-", "feedforward"], [5, 3, 0, "-", "positional_embedding"]], "xformers.components.MultiHeadDispatch": [[3, 1, 1, "", "forward"], [3, 1, 1, "", "from_config"], [3, 2, 1, "", "training"]], "xformers.components.attention": [[0, 0, 1, "", "Attention"], [0, 0, 1, "", "AttentionMask"], [0, 0, 1, "", "FavorAttention"], [0, 0, 1, "", "GlobalAttention"], [0, 0, 1, "", "LinformerAttention"], [0, 0, 1, "", "LocalAttention"], [0, 0, 1, "", "NystromAttention"], [0, 0, 1, "", "OrthoFormerAttention"], [0, 0, 1, "", "RandomAttention"], [0, 0, 1, "", "ScaledDotProduct"], [0, 5, 1, "", "build_attention"], [0, 5, 1, "", "register_attention"]], "xformers.components.attention.Attention": [[0, 1, 1, "", "forward"], [0, 1, 1, "", "from_config"]], "xformers.components.attention.AttentionMask": [[0, 4, 1, "", "device"], [0, 4, 1, "", "dtype"], [0, 1, 1, "", "from_bool"], [0, 1, 1, "", "from_multiplicative"], [0, 4, 1, "", "is_sparse"], [0, 1, 1, "", "make_causal"], [0, 1, 1, "", "make_crop"], [0, 4, 1, "", "ndim"], [0, 4, 1, "", "shape"], [0, 1, 1, "", "to"], [0, 1, 1, "", "to_bool"]], "xformers.components.attention.FavorAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.GlobalAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.LinformerAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.LocalAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.NystromAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.OrthoFormerAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.RandomAttention": [[0, 1, 1, "", "__init__"], [0, 1, 1, "", "forward"]], "xformers.components.attention.ScaledDotProduct": [[0, 1, 1, "", "forward"], [0, 2, 1, "", "mask"]], "xformers.components.feedforward": [[1, 0, 1, "", "Feedforward"], [1, 0, 1, "", "MLP"], [1, 5, 1, "", "build_feedforward"], [1, 5, 1, "", "register_feedforward"]], "xformers.components.feedforward.Feedforward": [[1, 1, 1, "", "from_config"], [1, 2, 1, "", "training"]], "xformers.components.feedforward.MLP": [[1, 1, 1, "", "forward"], [1, 2, 1, "", "training"]], "xformers.components.positional_embedding": [[5, 0, 1, "", "RotaryEmbedding"], [5, 0, 1, "", "SinePositionalEmbedding"], [5, 0, 1, "", "VocabEmbedding"], [5, 5, 1, "", "build_positional_embedding"], [5, 5, 1, "", "register_positional_embedding"]], "xformers.components.positional_embedding.RotaryEmbedding": [[5, 1, 1, "", "forward"], [5, 2, 1, "", "training"]], "xformers.components.positional_embedding.SinePositionalEmbedding": [[5, 1, 1, "", "forward"], [5, 2, 1, "", "training"]], "xformers.components.positional_embedding.VocabEmbedding": [[5, 1, 1, "", "forward"], [5, 1, 1, "", "init_weights"], [5, 2, 1, "", "training"]], "xformers.components.reversible": [[6, 0, 1, "", "Deterministic"], [6, 0, 1, "", "ReversibleBlock"], [6, 0, 1, "", "ReversibleSequence"]], "xformers.components.reversible.Deterministic": [[6, 1, 1, "", "forward"], [6, 1, 1, "", "record_rng"], [6, 2, 1, "", "training"]], "xformers.components.reversible.ReversibleBlock": [[6, 1, 1, "", "backward_pass"], [6, 1, 1, "", "forward"], [6, 2, 1, "", "training"]], "xformers.components.reversible.ReversibleSequence": [[6, 1, 1, "", "forward"], [6, 2, 1, "", "training"]], "xformers.factory": [[8, 3, 0, "-", "block_factory"], [10, 3, 0, "-", "model_factory"]], "xformers.factory.block_factory": [[8, 0, 1, "", "xFormerDecoderBlock"], [8, 0, 1, "", "xFormerEncoderBlock"]], "xformers.factory.block_factory.xFormerDecoderBlock": [[8, 1, 1, "", "forward"], [8, 1, 1, "", "from_config"], [8, 2, 1, "", "training"]], "xformers.factory.block_factory.xFormerEncoderBlock": [[8, 1, 1, "", "forward"], [8, 1, 1, "", "from_config"], [8, 1, 1, "", "get_reversible_layer"], [8, 2, 1, "", "training"]], "xformers.factory.model_factory": [[10, 0, 1, "", "xFormer"], [10, 0, 1, "", "xFormerConfig"]], "xformers.factory.model_factory.xFormer": [[10, 1, 1, "", "__init__"], [10, 1, 1, "", "forward"], [10, 1, 1, "", "from_config"], [10, 1, 1, "", "init_weights"], [10, 2, 1, "", "training"]], "xformers.factory.model_factory.xFormerConfig": [[10, 2, 1, "", "stack_configs"], [10, 2, 1, "", "tie_embedding_weights"], [10, 2, 1, "", "weight_init"]], "xformers": [[4, 3, 0, "-", "ops"], [7, 3, 0, "-", "triton"]], "xformers.ops": [[4, 0, 1, "", "AttentionBias"], [4, 0, 1, "", "AttentionOpBase"], [4, 3, 0, "-", "fmha"], [4, 5, 1, "", "memory_efficient_attention"]], "xformers.ops.AttentionBias": [[4, 1, 1, "", "materialize"]], "xformers.ops.AttentionOpBase": [[4, 1, 1, "", "not_supported_reasons"]], "xformers.ops.fmha": [[4, 3, 0, "-", "attn_bias"], [4, 3, 0, "-", "cutlass"], [4, 3, 0, "-", "flash"], [4, 5, 1, "", "memory_efficient_attention_backward"], [4, 5, 1, "", "memory_efficient_attention_forward"], [4, 5, 1, "", "memory_efficient_attention_forward_requires_grad"], [4, 3, 0, "-", "small_k"], [4, 3, 0, "-", "triton"]], "xformers.ops.fmha.attn_bias": [[4, 0, 1, "", "AttentionBias"], [4, 0, 1, "", "BlockDiagonalCausalFromBottomRightMask"], [4, 0, 1, "", "BlockDiagonalCausalMask"], [4, 0, 1, "", "BlockDiagonalCausalWithOffsetPaddedKeysMask"], [4, 0, 1, "", "BlockDiagonalMask"], [4, 0, 1, "", "LowerTriangularMask"], [4, 0, 1, "", "LowerTriangularMaskWithTensorBias"]], "xformers.ops.fmha.attn_bias.AttentionBias": [[4, 1, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalCausalWithOffsetPaddedKeysMask": [[4, 1, 1, "", "from_seqlens"], [4, 1, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalMask": [[4, 1, 1, "", "from_seqlens"], [4, 1, 1, "", "from_tensor_list"], [4, 1, 1, "", "make_causal"], [4, 1, 1, "", "make_causal_from_bottomright"], [4, 1, 1, "", "materialize"], [4, 1, 1, "", "split"]], "xformers.ops.fmha.cutlass": [[4, 0, 1, "", "BwOp"], [4, 0, 1, "", "FwOp"]], "xformers.ops.fmha.flash": [[4, 0, 1, "", "BwOp"], [4, 0, 1, "", "FwOp"]], "xformers.ops.fmha.small_k": [[4, 0, 1, "", "BwOp"], [4, 0, 1, "", "FwOp"]], "xformers.ops.fmha.triton": [[4, 0, 1, "", "BwOp"], [4, 0, 1, "", "FwOp"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:attribute", "3": "py:module", "4": "py:property", "5": "py:function"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "attribute", "Python attribute"], "3": ["py", "module", "Python module"], "4": ["py", "property", "Python property"], "5": ["py", "function", "Python function"]}, "titleterms": {"attent": [0, 3, 4, 19, 21], "mechan": [0, 1, 21], "feedforward": 1, "api": 2, "refer": [2, 7], "multi": 3, "head": 3, "xformer": [4, 11, 14, 17, 22], "optim": 4, "oper": [4, 12], "memori": 4, "effici": 4, "avail": 4, "implement": 4, "bias": 4, "non": 4, "autograd": 4, "posit": 5, "embed": 5, "revers": [6, 18], "layer": [6, 17, 20], "custom": [7, 11], "part": [7, 11, 14], "spars": [7, 19], "cuda": 7, "kernel": 7, "1": 7, "build": [7, 11, 17], "2": 7, "usag": 7, "triton": [7, 20], "requir": 7, "possibl": 7, "block": [8, 11, 17, 18], "factori": [8, 9, 10, 17], "model": [10, 11, 17, 19], "welcom": 11, "s": 11, "document": 11, "compon": 11, "programat": 11, "tutori": [11, 16], "exampl": 11, "some": 11, "how": 12, "enabl": 12, "fuse": [12, 20], "us": [12, 13, 18, 20], "aotautograd": 12, "nvfuser": 12, "blocksparseattent": 13, "extend": 14, "zoo": 14, "hierarch": 15, "transform": [15, 17, 18], "an": [17, 19], "encod": 17, "compar": 17, "pytorch": 17, "warn": 17, "full": 17, "hydra": 17, "intro": 18, "In": 18, "practic": 18, "replac": 19, "all": 19, "from": 19, "exist": 19, "vit": 19, "equival": 19, "base": 20, "softmax": 20, "linear": 20, "norm": 20, "dropout": 20, "bia": 20, "activ": 20, "i": 21, "m": 21, "onli": 21, "interest": 21, "test": 21, "out": 21, "ar": 21, "host": 21, "here": 21, "what": 22}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})