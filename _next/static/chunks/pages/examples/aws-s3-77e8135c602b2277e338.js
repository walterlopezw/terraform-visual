_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{PUc0:function(e){e.exports=JSON.parse('{"resource_changes":[{"address":"aws_s3_bucket.s3_bucket_create","mode":"managed","type":"aws_s3_bucket","name":"s3_bucket_create","provider_name":"aws","change":{"actions":["create"],"before":null,"after":{"acl":"private","bucket":"my-tf-test-bucket-create","bucket_prefix":null,"cors_rule":[],"force_destroy":false,"grant":[],"lifecycle_rule":[],"logging":[],"object_lock_configuration":[],"policy":null,"replication_configuration":[],"server_side_encryption_configuration":[],"tags":{"Environment":"Dev","Name":"My bucket"},"website":[]},"after_unknown":{"acceleration_status":true,"arn":true,"bucket_domain_name":true,"bucket_regional_domain_name":true,"cors_rule":[],"grant":[],"hosted_zone_id":true,"id":true,"lifecycle_rule":[],"logging":[],"object_lock_configuration":[],"region":true,"replication_configuration":[],"request_payer":true,"server_side_encryption_configuration":[],"tags":{},"versioning":true,"website":[],"website_domain":true,"website_endpoint":true}}},{"address":"aws_s3_bucket.s3_bucket_destroy","mode":"managed","type":"aws_s3_bucket","name":"s3_bucket_destroy","provider_name":"aws","change":{"actions":["delete"],"before":{"acceleration_status":"","acl":"private","arn":"arn:aws:s3:::my-tf-test-bucket-destroy","bucket":"my-tf-test-bucket-destroy","bucket_domain_name":"my-tf-test-bucket-destroy.s3.amazonaws.com","bucket_prefix":null,"bucket_regional_domain_name":"my-tf-test-bucket-destroy.s3.eu-central-1.amazonaws.com","cors_rule":[],"force_destroy":false,"grant":[],"hosted_zone_id":"ABCDEFGHIJ","id":"my-tf-test-bucket-destroy","lifecycle_rule":[],"logging":[],"object_lock_configuration":[],"policy":null,"region":"eu-central-1","replication_configuration":[],"request_payer":"BucketOwner","server_side_encryption_configuration":[],"tags":{"Environment":"Dev","Name":"My bucket"},"versioning":[{"enabled":false,"mfa_delete":false}],"website":[],"website_domain":null,"website_endpoint":null},"after":null,"after_unknown":{}}},{"address":"aws_s3_bucket.s3_bucket_update","mode":"managed","type":"aws_s3_bucket","name":"s3_bucket_update","provider_name":"aws","change":{"actions":["delete","create"],"before":{"acceleration_status":"","acl":"private","arn":"arn:aws:s3:::my-tf-test-bucket-update","bucket":"my-tf-test-bucket-update","bucket_domain_name":"my-tf-test-bucket-update.s3.amazonaws.com","bucket_prefix":null,"bucket_regional_domain_name":"my-tf-test-bucket-update.s3.eu-central-1.amazonaws.com","cors_rule":[],"force_destroy":false,"grant":[],"hosted_zone_id":"ABCDEFGHIJ","id":"my-tf-test-bucket-update","lifecycle_rule":[],"logging":[],"object_lock_configuration":[],"policy":null,"region":"eu-central-1","replication_configuration":[],"request_payer":"BucketOwner","server_side_encryption_configuration":[],"tags":{"Environment":"Dev","Name":"My bucket"},"versioning":[{"enabled":false,"mfa_delete":false}],"website":[],"website_domain":null,"website_endpoint":null},"after":{"acl":"private","bucket":"my-tf-test-bucket-update-2","bucket_prefix":null,"cors_rule":[],"force_destroy":false,"grant":[],"lifecycle_rule":[],"logging":[],"object_lock_configuration":[],"policy":null,"replication_configuration":[],"server_side_encryption_configuration":[],"tags":{"Environment":"Dev","Name":"My bucket"},"website":[]},"after_unknown":{"acceleration_status":true,"arn":true,"bucket_domain_name":true,"bucket_regional_domain_name":true,"cors_rule":[],"grant":[],"hosted_zone_id":true,"id":true,"lifecycle_rule":[],"logging":[],"object_lock_configuration":[],"region":true,"replication_configuration":[],"request_payer":true,"server_side_encryption_configuration":[],"tags":{},"versioning":true,"website":[],"website_domain":true,"website_endpoint":true}}}]}')},T0qb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/examples/aws-s3",function(){return n("TcfI")}])},TcfI:function(e,t,n){"use strict";n.r(t);var a=n("R/S1"),r=n("8ZI9"),o=n("hfLc"),c=n("PUc0"),i={awsS3:o.a.Utils.TerraformPlan.fromJson(c)},s=n("5NnW"),u=n("q1tI");t.default=function(){var e=Object(r.b)();return Object(u.useEffect)((function(){s.a.logEvent("enter page",{page:"examples",example:"aws-s3"}),e({type:"UPLOAD_TERRAFORM_PLAN",payload:i.awsS3})}),[]),a.b.C()}}},[["T0qb",1,2,4,7,3,5,0,6]]]);