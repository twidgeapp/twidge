// Code generated by Prisma Client Rust. DO NOT EDIT

#![allow(warnings, unused)]
static DATAMODEL_STR : & 'static str = "datasource db {\n  provider = \"sqlite\"\n  url      = \"file:dev.db\"\n}\n\ngenerator client {\n  // Corresponds to the cargo alias created earlier\n  provider = \"cargo prisma\"\n  // The location to generate the schema. Is relative to the position of the schema\n  output   = \"../core/src/prisma.rs\"\n}\n\nmodel User {\n  id          String @id\n  displayName String\n}\n" ;
static DATABASE_STR: &'static str = "sqlite";
pub async fn new_client() -> Result<PrismaClient, ::prisma_client_rust::NewClientError> {
    let config = ::prisma_client_rust::datamodel::parse_configuration(DATAMODEL_STR)?.subject;
    let source = config
        .datasources
        .first()
        .expect("Please supply a datasource in your schema.prisma file");
    let url = if let Some(url) = source.load_shadow_database_url()? {
        url
    } else {
        source.load_url(|key| std::env::var(key).ok())?
    };
    let url = if url.starts_with("file:") {
        let path = url.split(":").nth(1).unwrap();
        if std::path::Path::new("./schema.prisma").exists() {
            url
        } else if std::path::Path::new("./prisma/schema.prisma").exists() {
            format!("file:./prisma/{}", path)
        } else {
            url
        }
    } else {
        url
    };
    new_client_with_url(&url).await
}
pub async fn new_client_with_url(
    url: &str,
) -> Result<PrismaClient, ::prisma_client_rust::NewClientError> {
    let config = ::prisma_client_rust::datamodel::parse_configuration(DATAMODEL_STR)?.subject;
    let source = config
        .datasources
        .first()
        .expect("Please supply a datasource in your schema.prisma file");
    let (db_name, executor) =
        ::prisma_client_rust::query_core::executor::load(&source, &[], &url).await?;
    let internal_model =
        ::prisma_client_rust::prisma_models::InternalDataModelBuilder::new(DATAMODEL_STR)
            .build(db_name);
    let query_schema = std::sync::Arc::new(prisma_client_rust::query_core::schema_builder::build(
        internal_model,
        true,
        source.capabilities(),
        vec![],
        source.referential_integrity(),
    ));
    executor.primary_connector().get_connection().await?;
    Ok(PrismaClient::_new(executor, query_schema))
}
pub mod user {
    use super::_prisma::*;
    use super::*;
    pub mod id {
        use super::super::*;
        use super::_prisma::*;
        use super::{OrderByParam, SetParam, UniqueWhereParam, WhereParam, WithParam};
        pub fn set<T: From<Set>>(value: String) -> T {
            Set(value).into()
        }
        pub fn equals<T: From<UniqueWhereParam>>(value: String) -> T {
            UniqueWhereParam::IdEquals(value).into()
        }
        pub fn order(direction: ::prisma_client_rust::Direction) -> OrderByParam {
            OrderByParam::Id(direction)
        }
        pub fn in_vec(value: Vec<String>) -> WhereParam {
            WhereParam::IdInVec(value)
        }
        pub fn not_in_vec(value: Vec<String>) -> WhereParam {
            WhereParam::IdNotInVec(value)
        }
        pub fn lt(value: String) -> WhereParam {
            WhereParam::IdLt(value)
        }
        pub fn lte(value: String) -> WhereParam {
            WhereParam::IdLte(value)
        }
        pub fn gt(value: String) -> WhereParam {
            WhereParam::IdGt(value)
        }
        pub fn gte(value: String) -> WhereParam {
            WhereParam::IdGte(value)
        }
        pub fn contains(value: String) -> WhereParam {
            WhereParam::IdContains(value)
        }
        pub fn starts_with(value: String) -> WhereParam {
            WhereParam::IdStartsWith(value)
        }
        pub fn ends_with(value: String) -> WhereParam {
            WhereParam::IdEndsWith(value)
        }
        pub fn not(value: String) -> WhereParam {
            WhereParam::IdNot(value)
        }
        pub struct Set(pub String);
        impl From<Set> for SetParam {
            fn from(value: Set) -> Self {
                Self::SetId(value.0)
            }
        }
    }
    pub mod display_name {
        use super::super::*;
        use super::_prisma::*;
        use super::{OrderByParam, SetParam, UniqueWhereParam, WhereParam, WithParam};
        pub fn set<T: From<Set>>(value: String) -> T {
            Set(value).into()
        }
        pub fn equals(value: String) -> WhereParam {
            WhereParam::DisplayNameEquals(value).into()
        }
        pub fn order(direction: ::prisma_client_rust::Direction) -> OrderByParam {
            OrderByParam::DisplayName(direction)
        }
        pub fn in_vec(value: Vec<String>) -> WhereParam {
            WhereParam::DisplayNameInVec(value)
        }
        pub fn not_in_vec(value: Vec<String>) -> WhereParam {
            WhereParam::DisplayNameNotInVec(value)
        }
        pub fn lt(value: String) -> WhereParam {
            WhereParam::DisplayNameLt(value)
        }
        pub fn lte(value: String) -> WhereParam {
            WhereParam::DisplayNameLte(value)
        }
        pub fn gt(value: String) -> WhereParam {
            WhereParam::DisplayNameGt(value)
        }
        pub fn gte(value: String) -> WhereParam {
            WhereParam::DisplayNameGte(value)
        }
        pub fn contains(value: String) -> WhereParam {
            WhereParam::DisplayNameContains(value)
        }
        pub fn starts_with(value: String) -> WhereParam {
            WhereParam::DisplayNameStartsWith(value)
        }
        pub fn ends_with(value: String) -> WhereParam {
            WhereParam::DisplayNameEndsWith(value)
        }
        pub fn not(value: String) -> WhereParam {
            WhereParam::DisplayNameNot(value)
        }
        pub struct Set(pub String);
        impl From<Set> for SetParam {
            fn from(value: Set) -> Self {
                Self::SetDisplayName(value.0)
            }
        }
    }
    pub fn _outputs() -> Vec<::prisma_client_rust::Selection> {
        ["id", "displayName"]
            .into_iter()
            .map(|o| {
                let builder = ::prisma_client_rust::Selection::builder(o);
                builder.build()
            })
            .collect()
    }
    pub fn create(
        id: String,
        display_name: String,
        _params: Vec<SetParam>,
    ) -> (String, String, Vec<SetParam>) {
        (id, display_name, _params)
    }
    #[macro_export]
    macro_rules ! _select_user { ($ ($ field : ident $ (($ ($ filters : tt) +) $ (. $ arg : ident ($ ($ arg_params : tt) *)) *) ? $ ({ $ ($ selections : tt) + }) ?) +) => { { $ crate :: prisma :: user :: select ! (@ definitions ; $ ($ field $ (($ ($ filters) +) $ (. $ arg ($ ($ arg_params) *)) *) ? $ ({ $ ($ selections) + }) ?) +) ; Select ($ crate :: prisma :: user :: select ! (@ select_fields_to_selections ; $ ($ field $ (($ ($ filters) +) $ (. $ arg ($ ($ arg_params) *)) *) ? $ ({ $ ($ selections) + }) ?) +)) } } ; (@ definitions ; $ ($ field : ident $ (($ ($ filters : tt) +) $ (. $ arg : ident ($ ($ arg_params : tt) *)) *) ? $ ({ $ ($ selections : tt) + }) ?) +) => { # [allow (warnings)] enum Fields { id , display_name } # [allow (warnings)] impl Fields { fn selections () { $ (let _ = Fields :: $ field ;) + } } # [derive (:: serde :: Deserialize , :: serde :: Serialize)] # [allow (warnings)] # [serde (rename_all = "camelCase")] pub struct Data { $ ($ field : $ crate :: prisma :: user :: select ! (@ field_type ; $ field $ ({ $ ($ selections) + }) ?) ,) + } impl prisma_client_rust :: rspc :: internal :: specta :: Type for Data { const NAME : & 'static str = "Data" ; fn inline (_opts : prisma_client_rust :: rspc :: internal :: specta :: DefOpts , _ : & [prisma_client_rust :: rspc :: internal :: specta :: DataType]) -> prisma_client_rust :: rspc :: internal :: specta :: DataType { prisma_client_rust :: rspc :: internal :: specta :: DataType :: Object (prisma_client_rust :: rspc :: internal :: specta :: ObjectType { name : "Data" . to_string () , tag : None , generics : vec ! [] , fields : vec ! [$ (prisma_client_rust :: rspc :: internal :: specta :: ObjectField { name : stringify ! ($ field) . to_string () , optional : false , ty : < $ crate :: prisma :: user :: select ! (@ field_type ; $ field $ ({ $ ($ selections) + }) ?) as prisma_client_rust :: rspc :: internal :: specta :: Type > :: reference (prisma_client_rust :: rspc :: internal :: specta :: DefOpts { parent_inline : false , type_map : _opts . type_map } , & []) }) , *] , type_id : None }) } fn reference (_opts : prisma_client_rust :: rspc :: internal :: specta :: DefOpts , _ : & [prisma_client_rust :: rspc :: internal :: specta :: DataType]) -> prisma_client_rust :: rspc :: internal :: specta :: DataType { Self :: inline (_opts , & []) } fn definition (_opts : prisma_client_rust :: rspc :: internal :: specta :: DefOpts) -> prisma_client_rust :: rspc :: internal :: specta :: DataType { unreachable ! () } } $ ($ (pub mod $ field { $ crate :: prisma :: user :: select ! (@ field_module ; $ field { $ ($ selections) + }) ; }) ?) + pub struct Select (pub Vec < :: prisma_client_rust :: Selection >) ; impl :: prisma_client_rust :: select :: SelectType < $ crate :: prisma :: user :: Data > for Select { type Data = Data ; fn to_selections (self) -> Vec < :: prisma_client_rust :: Selection > { self . 0 } } } ; (@ field_type ; id) => { String } ; (@ field_type ; display_name) => { String } ; (@ field_type ; $ field : ident $ ($ tokens : tt) *) => { compile_error ! (stringify ! (Cannot select field nonexistent field $ field on model "User" , available fields are "id, display_name")) } ; (@ field_module ; $ ($ tokens : tt) *) => { } ; (@ select_fields_to_selections ; $ ($ field : ident $ (($ ($ filters : tt) +) $ (. $ arg : ident ($ ($ arg_params : tt) *)) *) ? $ ({ $ ($ selections : tt) + }) ?) +) => { vec ! [$ ($ crate :: prisma :: user :: select ! (@ select_field_to_selection ; $ field $ (($ ($ filters) +) $ (. $ arg ($ ($ arg_params) *)) *) ? $ ({ $ ($ selections) + }) ?)) , +] } ; (@ select_field_to_selection ; id) => { :: prisma_client_rust :: Selection :: builder ("id") . build () } ; (@ select_field_to_selection ; display_name) => { :: prisma_client_rust :: Selection :: builder ("displayName") . build () } ; (@ select_field_to_selection ; $ ($ tokens : tt) *) => { :: prisma_client_rust :: Selection :: builder ("") . build () } ; (@ field_raw_name ; id) => { "id" } ; (@ field_raw_name ; display_name) => { "displayName" } ; }
    pub use _select_user as select;
    #[derive(
        Debug,
        Clone,
        :: serde :: Serialize,
        :: serde :: Deserialize,
        :: prisma_client_rust :: rspc :: Type,
    )]
    #[specta(rename = "User", crate = "prisma_client_rust::rspc::internal::specta")]
    pub struct Data {
        #[serde(rename = "id")]
        pub id: String,
        #[serde(rename = "displayName")]
        pub display_name: String,
    }
    impl Data {}
    #[derive(Clone)]
    pub enum WithParam {}
    impl Into<::prisma_client_rust::Selection> for WithParam {
        fn into(self) -> ::prisma_client_rust::Selection {
            match self {}
        }
    }
    #[derive(Clone)]
    pub enum SetParam {
        SetId(String),
        SetDisplayName(String),
    }
    impl Into<(String, ::prisma_client_rust::PrismaValue)> for SetParam {
        fn into(self) -> (String, ::prisma_client_rust::PrismaValue) {
            match self {
                SetParam::SetId(value) => (
                    "id".to_string(),
                    ::prisma_client_rust::PrismaValue::String(value),
                ),
                SetParam::SetDisplayName(value) => (
                    "displayName".to_string(),
                    ::prisma_client_rust::PrismaValue::String(value),
                ),
            }
        }
    }
    #[derive(Clone)]
    pub enum OrderByParam {
        Id(::prisma_client_rust::Direction),
        DisplayName(::prisma_client_rust::Direction),
    }
    impl Into<(String, ::prisma_client_rust::PrismaValue)> for OrderByParam {
        fn into(self) -> (String, ::prisma_client_rust::PrismaValue) {
            match self {
                Self::Id(direction) => (
                    "id".to_string(),
                    ::prisma_client_rust::PrismaValue::String(direction.to_string()),
                ),
                Self::DisplayName(direction) => (
                    "displayName".to_string(),
                    ::prisma_client_rust::PrismaValue::String(direction.to_string()),
                ),
            }
        }
    }
    #[derive(Clone)]
    pub enum WhereParam {
        Not(Vec<WhereParam>),
        Or(Vec<WhereParam>),
        And(Vec<WhereParam>),
        IdEquals(String),
        IdInVec(Vec<String>),
        IdNotInVec(Vec<String>),
        IdLt(String),
        IdLte(String),
        IdGt(String),
        IdGte(String),
        IdContains(String),
        IdStartsWith(String),
        IdEndsWith(String),
        IdNot(String),
        DisplayNameEquals(String),
        DisplayNameInVec(Vec<String>),
        DisplayNameNotInVec(Vec<String>),
        DisplayNameLt(String),
        DisplayNameLte(String),
        DisplayNameGt(String),
        DisplayNameGte(String),
        DisplayNameContains(String),
        DisplayNameStartsWith(String),
        DisplayNameEndsWith(String),
        DisplayNameNot(String),
    }
    impl Into<::prisma_client_rust::SerializedWhere> for WhereParam {
        fn into(self) -> ::prisma_client_rust::SerializedWhere {
            match self {
                Self::Not(value) => ::prisma_client_rust::SerializedWhere::new(
                    "NOT",
                    ::prisma_client_rust::SerializedWhereValue::Object(
                        value
                            .into_iter()
                            .map(Into::<::prisma_client_rust::SerializedWhere>::into)
                            .map(Into::into)
                            .collect(),
                    ),
                ),
                Self::Or(value) => ::prisma_client_rust::SerializedWhere::new(
                    "OR",
                    ::prisma_client_rust::SerializedWhereValue::List(
                        value
                            .into_iter()
                            .map(Into::<::prisma_client_rust::SerializedWhere>::into)
                            .map(Into::into)
                            .map(|v| vec![v])
                            .map(::prisma_client_rust::PrismaValue::Object)
                            .collect(),
                    ),
                ),
                Self::And(value) => ::prisma_client_rust::SerializedWhere::new(
                    "AND",
                    ::prisma_client_rust::SerializedWhereValue::Object(
                        value
                            .into_iter()
                            .map(Into::<::prisma_client_rust::SerializedWhere>::into)
                            .map(Into::into)
                            .collect(),
                    ),
                ),
                Self::IdEquals(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "equals".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::IdInVec(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "in".to_string(),
                        ::prisma_client_rust::PrismaValue::List(
                            value
                                .into_iter()
                                .map(|v| ::prisma_client_rust::PrismaValue::String(v))
                                .collect(),
                        ),
                    )]),
                ),
                Self::IdNotInVec(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "notIn".to_string(),
                        ::prisma_client_rust::PrismaValue::List(
                            value
                                .into_iter()
                                .map(|v| ::prisma_client_rust::PrismaValue::String(v))
                                .collect(),
                        ),
                    )]),
                ),
                Self::IdLt(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "lt".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::IdLte(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "lte".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::IdGt(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "gt".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::IdGte(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "gte".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::IdContains(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "contains".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::IdStartsWith(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "startsWith".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::IdEndsWith(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "endsWith".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::IdNot(value) => ::prisma_client_rust::SerializedWhere::new(
                    "id",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "not".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::DisplayNameEquals(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "equals".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::DisplayNameInVec(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "in".to_string(),
                        ::prisma_client_rust::PrismaValue::List(
                            value
                                .into_iter()
                                .map(|v| ::prisma_client_rust::PrismaValue::String(v))
                                .collect(),
                        ),
                    )]),
                ),
                Self::DisplayNameNotInVec(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "notIn".to_string(),
                        ::prisma_client_rust::PrismaValue::List(
                            value
                                .into_iter()
                                .map(|v| ::prisma_client_rust::PrismaValue::String(v))
                                .collect(),
                        ),
                    )]),
                ),
                Self::DisplayNameLt(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "lt".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::DisplayNameLte(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "lte".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::DisplayNameGt(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "gt".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::DisplayNameGte(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "gte".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::DisplayNameContains(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "contains".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::DisplayNameStartsWith(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "startsWith".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::DisplayNameEndsWith(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "endsWith".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
                Self::DisplayNameNot(value) => ::prisma_client_rust::SerializedWhere::new(
                    "displayName",
                    ::prisma_client_rust::SerializedWhereValue::Object(vec![(
                        "not".to_string(),
                        ::prisma_client_rust::PrismaValue::String(value),
                    )]),
                ),
            }
        }
    }
    #[derive(Clone)]
    pub enum UniqueWhereParam {
        IdEquals(String),
    }
    impl From<UniqueWhereParam> for WhereParam {
        fn from(value: UniqueWhereParam) -> Self {
            match value {
                UniqueWhereParam::IdEquals(value) => Self::IdEquals(value),
            }
        }
    }
    impl From<::prisma_client_rust::Operator<Self>> for WhereParam {
        fn from(op: ::prisma_client_rust::Operator<Self>) -> Self {
            match op {
                ::prisma_client_rust::Operator::Not(value) => Self::Not(value),
                ::prisma_client_rust::Operator::And(value) => Self::And(value),
                ::prisma_client_rust::Operator::Or(value) => Self::Or(value),
            }
        }
    }
    pub type UniqueArgs = ::prisma_client_rust::UniqueArgs<WithParam>;
    pub type ManyArgs =
        ::prisma_client_rust::ManyArgs<WhereParam, WithParam, OrderByParam, UniqueWhereParam>;
    pub type Count<'a> =
        ::prisma_client_rust::Count<'a, WhereParam, OrderByParam, UniqueWhereParam>;
    pub type Create<'a> = ::prisma_client_rust::Create<'a, SetParam, WithParam, Data>;
    pub type CreateMany<'a> = ::prisma_client_rust::CreateMany<'a, SetParam>;
    pub type FindUnique<'a> =
        ::prisma_client_rust::FindUnique<'a, WhereParam, WithParam, SetParam, Data>;
    pub type FindMany<'a> = ::prisma_client_rust::FindMany<
        'a,
        WhereParam,
        WithParam,
        OrderByParam,
        UniqueWhereParam,
        SetParam,
        Data,
    >;
    pub type FindFirst<'a> = ::prisma_client_rust::FindFirst<
        'a,
        WhereParam,
        WithParam,
        OrderByParam,
        UniqueWhereParam,
        Data,
    >;
    pub type Update<'a> = ::prisma_client_rust::Update<'a, WhereParam, WithParam, SetParam, Data>;
    pub type UpdateMany<'a> = ::prisma_client_rust::UpdateMany<'a, WhereParam, SetParam>;
    pub type Upsert<'a> = ::prisma_client_rust::Upsert<'a, WhereParam, SetParam, WithParam, Data>;
    pub type Delete<'a> = ::prisma_client_rust::Delete<'a, WhereParam, WithParam, Data>;
    pub type DeleteMany<'a> = ::prisma_client_rust::DeleteMany<'a, WhereParam>;
    pub struct Actions<'a> {
        pub client: &'a PrismaClient,
    }
    impl<'a> Actions<'a> {
        pub fn find_unique(self, _where: UniqueWhereParam) -> FindUnique<'a> {
            FindUnique::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                _where.into(),
            )
        }
        pub fn find_first(self, _where: Vec<WhereParam>) -> FindFirst<'a> {
            FindFirst::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                _where,
            )
        }
        pub fn find_many(self, _where: Vec<WhereParam>) -> FindMany<'a> {
            FindMany::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                _where,
            )
        }
        pub fn create(
            self,
            id: String,
            display_name: String,
            mut _params: Vec<SetParam>,
        ) -> Create<'a> {
            _params.push(id::set(id));
            _params.push(display_name::set(display_name));
            Create::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                _params,
            )
        }
        pub fn create_many(self, data: Vec<(String, String, Vec<SetParam>)>) -> CreateMany<'a> {
            let data = data
                .into_iter()
                .map(|(id, display_name, mut _params)| {
                    _params.push(id::set(id));
                    _params.push(display_name::set(display_name));
                    _params
                })
                .collect();
            CreateMany::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                data,
            )
        }
        pub fn update(self, _where: UniqueWhereParam, _params: Vec<SetParam>) -> Update<'a> {
            Update::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                _where.into(),
                _params,
                vec![],
            )
        }
        pub fn update_many(
            self,
            _where: Vec<WhereParam>,
            _params: Vec<SetParam>,
        ) -> UpdateMany<'a> {
            UpdateMany::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                _where,
                _params,
            )
        }
        pub fn upsert(
            self,
            _where: UniqueWhereParam,
            (id, display_name, mut _params): (String, String, Vec<SetParam>),
            _update: Vec<SetParam>,
        ) -> Upsert<'a> {
            _params.push(id::set(id));
            _params.push(display_name::set(display_name));
            Upsert::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                _where.into(),
                _params,
                _update,
            )
        }
        pub fn delete(self, _where: UniqueWhereParam) -> Delete<'a> {
            Delete::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                _where.into(),
                vec![],
            )
        }
        pub fn delete_many(self, _where: Vec<WhereParam>) -> DeleteMany<'a> {
            DeleteMany::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                _where.into(),
            )
        }
        pub fn count(self, _where: Vec<WhereParam>) -> Count<'a> {
            Count::new(
                self.client._new_query_context(),
                ::prisma_client_rust::QueryInfo::new("User", _outputs()),
                vec![],
            )
        }
    }
}
pub mod _prisma {
    pub struct PrismaClient {
        executor: ::prisma_client_rust::Executor,
        query_schema: ::std::sync::Arc<::prisma_client_rust::schema::QuerySchema>,
    }
    impl ::std::fmt::Debug for PrismaClient {
        fn fmt(&self, f: &mut ::std::fmt::Formatter<'_>) -> ::std::fmt::Result {
            f.debug_struct("PrismaClient").finish()
        }
    }
    impl PrismaClient {
        pub(super) fn _new_query_context(&self) -> ::prisma_client_rust::queries::QueryContext {
            ::prisma_client_rust::queries::QueryContext::new(&self.executor, &self.query_schema)
        }
        pub(super) fn _new(
            executor: ::prisma_client_rust::Executor,
            query_schema: std::sync::Arc<::prisma_client_rust::schema::QuerySchema>,
        ) -> Self {
            Self {
                executor,
                query_schema,
            }
        }
        pub fn _query_raw<T: serde::de::DeserializeOwned>(
            &self,
            query: ::prisma_client_rust::raw::Raw,
        ) -> ::prisma_client_rust::QueryRaw<T> {
            ::prisma_client_rust::QueryRaw::new(
                ::prisma_client_rust::queries::QueryContext::new(
                    &self.executor,
                    &self.query_schema,
                ),
                query,
                super::DATABASE_STR,
            )
        }
        pub fn _execute_raw(
            &self,
            query: ::prisma_client_rust::raw::Raw,
        ) -> ::prisma_client_rust::ExecuteRaw {
            ::prisma_client_rust::ExecuteRaw::new(
                ::prisma_client_rust::queries::QueryContext::new(
                    &self.executor,
                    &self.query_schema,
                ),
                query,
                super::DATABASE_STR,
            )
        }
        pub async fn _batch<T: ::prisma_client_rust::BatchContainer<Marker>, Marker>(
            &self,
            queries: T,
        ) -> ::prisma_client_rust::queries::Result<T::ReturnType> {
            ::prisma_client_rust::batch(queries, &self.executor, &self.query_schema).await
        }
        pub fn user(&self) -> super::user::Actions {
            super::user::Actions { client: &self }
        }
    }
    #[derive(Debug, Clone, Copy, :: serde :: Serialize, :: serde :: Deserialize)]
    pub enum SortOrder {
        #[serde(rename = "asc")]
        Asc,
        #[serde(rename = "desc")]
        Desc,
    }
    impl ToString for SortOrder {
        fn to_string(&self) -> String {
            match self {
                Self::Asc => "asc".to_string(),
                Self::Desc => "desc".to_string(),
            }
        }
    }
    #[derive(Debug, Clone, Copy, :: serde :: Serialize, :: serde :: Deserialize)]
    pub enum TransactionIsolationLevel {
        #[serde(rename = "Serializable")]
        Serializable,
    }
    impl ToString for TransactionIsolationLevel {
        fn to_string(&self) -> String {
            match self {
                Self::Serializable => "Serializable".to_string(),
            }
        }
    }
    #[derive(Debug, Clone, Copy, :: serde :: Serialize, :: serde :: Deserialize)]
    pub enum UserScalarFieldEnum {
        #[serde(rename = "id")]
        Id,
        #[serde(rename = "displayName")]
        DisplayName,
    }
    impl ToString for UserScalarFieldEnum {
        fn to_string(&self) -> String {
            match self {
                Self::Id => "id".to_string(),
                Self::DisplayName => "displayName".to_string(),
            }
        }
    }
}
pub use _prisma::PrismaClient;